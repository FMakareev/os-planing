import * as React from 'react';
import {compose, graphql, MutationResult, MutationFn} from "react-apollo";
import CreatePrivacyMutation from './CreatePrivacyMutation.graphql';
import UpdatePrivacyMutation from './UpdatePrivacyMutation.graphql';
import {IPrivacyBlock, ICreatePrivacyBlockData} from '../../../../Apollo/schema';
import HasOwnProperty from "../../../../Helpers/HasOwnProperty";
import PrivacyBlockListQuery from "../PrivacyBlockListEnhancer/PrivacyBlockListQuery.graphql";

interface IPrivacyBlockEditEnhancerState {
  isEdit: boolean
}

interface IPrivacyBlockEditEnhancerProps {
  CreatePrivacy: MutationFn<ICreatePrivacyBlockData, IPrivacyBlock>;
  CreatePrivacyResult: MutationResult<ICreatePrivacyBlockData>;
  UpdatePrivacy: MutationFn<ICreatePrivacyBlockData, IPrivacyBlock>;
  UpdatePrivacyResult: MutationResult<ICreatePrivacyBlockData>;

  [prop: string]: any
}


export interface IPrivacyBlockEditEnhancerAPI {
  toggleEditMode(isEdit: boolean): void;
  onSubmit(values: IPrivacyBlock): Promise<any>;
  loading: boolean;
  isEdit: boolean;
  [prop: string]: any
}

const enhancers = compose(
  graphql<ICreatePrivacyBlockData, IPrivacyBlock>(CreatePrivacyMutation, {
    name: 'CreatePrivacy'
  }),
  graphql<ICreatePrivacyBlockData, IPrivacyBlock>(UpdatePrivacyMutation, {
    name: 'UpdatePrivacy'
  }),
);


const PrivacyBlockEditEnhancer = (WrapperComponent: React.ElementType) => {
  return enhancers(class extends React.Component<IPrivacyBlockEditEnhancerProps, IPrivacyBlockEditEnhancerState> {

    state = {
      isEdit: false,
    };
    
    toggleEditMode = (isEdit: boolean) => {
      this.setState({isEdit});
    };

    onSubmit = async (values: IPrivacyBlock): Promise<any> => {
      if (HasOwnProperty.call(values, 'id')) {
        await this.props.UpdatePrivacy({
          variables: values,
          refetchQueries: [
            {
              query: PrivacyBlockListQuery
            }
          ]
        })
      } else {
        await this.props.CreatePrivacy({
          variables: values,
          refetchQueries: [
            {
              query: PrivacyBlockListQuery
            }
          ]
        })
      }

      this.toggleEditMode(false);
    };

    render() {
      const {CreatePrivacyResult, UpdatePrivacyResult} = this.props;


      return (<WrapperComponent
        toggleEditMode={this.toggleEditMode}
        onSubmit={this.onSubmit}
        loading={CreatePrivacyResult.loading || UpdatePrivacyResult.loading}
        isEdit={this.state.isEdit}
        {...this.props}/>);
    }
  })
};

export default PrivacyBlockEditEnhancer;