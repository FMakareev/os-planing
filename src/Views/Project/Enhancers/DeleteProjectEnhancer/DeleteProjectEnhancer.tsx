import * as React from 'react';
import DeleteProjectQuery from './DeleteProjectQuery.graphql';
import {graphql, MutateProps} from 'react-apollo'
import {IReceptionData} from "../../../../Apollo/schema";
import RefetchProjectListQueries from '../RefetchProjectListQueries/RefetchProjectListQueries';


interface IDeleteProjectProps extends MutateProps {
  [prop: string]: any
}

const DeleteProjectEnhancer = (WrapperComponent: React.ElementType) => {
  return graphql<any, IReceptionData>(DeleteProjectQuery)(class extends React.Component<IDeleteProjectProps> {

    onDelete = async (id: string, callBack: any) => {
      await this.props.mutate({
        variables: {
          id,
        },
        refetchQueries: [
          RefetchProjectListQueries()
        ]
      });

      callBack();
    };

    render() {
      return (<WrapperComponent
        {...this.props}
        onDelete={this.onDelete}
      />)
    }
  })
};

export default DeleteProjectEnhancer;