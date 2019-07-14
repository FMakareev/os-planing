import * as React from 'react';
import DeletePrivacyMutation from './DeletePrivacyMutation.graphql';
import {graphql, MutationFn, MutationResult} from "react-apollo";
import PrivacyBlockListQuery from "../PrivacyBlockListEnhancer/PrivacyBlockListQuery.graphql";

interface IPrivacyDeleteEnhancerProps {
  DeletePrivacy: MutationFn<any, {id: string}>;
  DeletePrivacyResult: MutationResult<any>;
  [prop: string]: any
}

const PrivacyDeleteEnhancer = (WrapperComponent: React.ElementType) => {
  return graphql<any, {id: string}>(DeletePrivacyMutation, {
    name: 'DeletePrivacy'
  })(class extends React.Component<IPrivacyDeleteEnhancerProps> {

    onDelete = async (id: string, callback: any) => {
      await this.props.DeletePrivacy({
        variables: {
          id,
        },
        refetchQueries: [
          {
            query: PrivacyBlockListQuery
          }
        ]
      });
      callback && callback();
    };

    render() {
      return (<WrapperComponent
        {...this.props}
        onDelete={this.onDelete}
      />)
    }
  })
};

export default PrivacyDeleteEnhancer;