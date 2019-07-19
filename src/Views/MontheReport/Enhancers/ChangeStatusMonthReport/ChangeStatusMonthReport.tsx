import * as React from 'react';
import {EventStatusEnum} from "../../../../Apollo/schema";
import ChangeEventStatusMutation from './ChangeStatusMonthReportMutation.graphql';
import {withApollo, WithApolloClient} from 'react-apollo';

interface IChangeStatusEventProps {
  [prop: string]: any
}


const ChangeStatusMonthReport = (WrapperComponent: React.ElementType) => {
  return withApollo(class extends React.Component<WithApolloClient<IChangeStatusEventProps>> {

    onChangeStatus = async (id: string, status: EventStatusEnum,) => {
      const {client} = this.props;
      await client.mutate({
        mutation: ChangeEventStatusMutation,
        variables: {
          id,
          status
        }
      });
    };


    render() {
      return (<WrapperComponent
        onChangeStatus={this.onChangeStatus}
        {...this.props}/>);
    }
  })
};

export default ChangeStatusMonthReport;