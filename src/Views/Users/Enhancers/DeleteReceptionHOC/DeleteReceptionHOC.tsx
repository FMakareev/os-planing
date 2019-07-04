import * as React from 'react';
import DeleteReceptionQuery from './DeleteReceptionQuery.graphql';
import {graphql, MutateProps} from 'react-apollo'
import {IReceptionData} from "../../../../Apollo/schema";
import RefetchReceptionListQueries from "../RefetchReceptionListQueries/RefetchReceptionListQueries";


interface IDeleteReceptionProps extends MutateProps {
  [prop: string]: any
}

const DeleteReceptionHOC = (WrapperComponent: React.ElementType) => {
  return graphql<any, IReceptionData>(DeleteReceptionQuery)(class extends React.Component<IDeleteReceptionProps> {

    onDelete = async (id: string, callBack: any) => {
      await this.props.mutate({
        variables: {
          id,
        },
        refetchQueries: [RefetchReceptionListQueries()]
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

export default DeleteReceptionHOC;