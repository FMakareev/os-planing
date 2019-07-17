import * as React from 'react';
import {graphql, compose} from "react-apollo";
import CreateSettingsMutation from './CreateSettingsMutation.graphql';
import UpdateUserMutation from './UpdateUserMutation.graphql';
import {IStoreState} from "../../../../Store/Store";
import {connect} from "react-redux";
import {IUser, ISMTPSettings} from "../../../../Apollo/schema";
import {Dispatch} from "redux";
import {AddUser} from "../../../../Store/Reducers/User/actionCreators";
import {IUserState} from "../../../../Store/Reducers/User/reducers";
import {IFormChangeSMTPSettingValues} from '../../Components/FormChangeSMTPSetting/FormChangeSMTPSetting';
import {FormApi, FORM_ERROR} from "final-form";
import {TextFieldEnum} from '../../../../Components/TextField/TextField';
import SettingsItemQuery from "../GetSMTPSetting/SettingsItemQuery.graphql";
import HasOwnProperty from "../../../../Helpers/HasOwnProperty";

interface IChangeSettingsHocProps {
  ChangeSettings(options: any): any;

  ChangeSettingsResult: any;

  UpdateUser(options: any): any;

  UpdateUserResult: any;

  updateUserInStore(user: IUser): any;

  settingsItem?: ISMTPSettings;
  user: IUserState;

  [prop: string]: any
}


const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateUserInStore: (user: IUser) => dispatch(AddUser(user)),
});

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});


const MutationCompose = (WrapperComponent: React.ElementType) => compose(
  graphql(CreateSettingsMutation, {name: 'ChangeSettings'}),
  graphql(UpdateUserMutation, {name: 'UpdateUser'}),
  connect(mapStateToProps, mapDispatchToProps)
)(WrapperComponent);


const ChangeSettingsHoc = (WrapperComponent: React.ElementType) => {
  return MutationCompose(class extends React.Component<IChangeSettingsHocProps> {


    updateUser = async (values: IFormChangeSMTPSettingValues) => {
      const {UpdateUser, user, updateUserInStore} = this.props;
      if (user.user && (
        values.email !== user.user.email ||
        values.fullName !== user.user.fullName
      )) {
        const {data} = await UpdateUser({
          variables: {
            id: user.user && user.user.id,
            ...(values.email !== user.user.email ? {email: values.email} : {}),
            ...(values.fullName !== user.user.fullName ? {fullName: values.fullName} : {}),
          }
        });
        updateUserInStore(data.updateUser.user);
      }
      return null;
    };

    onSubmit = (initialValues: any) => async (values: IFormChangeSMTPSettingValues, form: FormApi<IFormChangeSMTPSettingValues>) => {
      const {ChangeSettings} = this.props;

      await Promise.all([
        ChangeSettings({
          variables: {
            host: values.host,
            port: values.port,
            login: values.login,
            password: values.password,
            tlsUse: values.tlsUse,
          },
          refetchQueries: [
            {
              query: SettingsItemQuery
            }
          ]
        }),
        this.updateUser(values),
      ]);
      const result:any = {};
      Object.entries(values).forEach(([key, value]) => {
        if (HasOwnProperty.call(initialValues, key) && initialValues[key] !== value) {
          result[key] = TextFieldEnum.SaveField;
        }
      });

      return result;
    };

    render() {
      const {UpdateUserResult, ChangeSettingsResult, settingsItem, user} = this.props;
      return (<WrapperComponent
        onSubmit={this.onSubmit}
        loading={UpdateUserResult.loading || ChangeSettingsResult.loading}
        initialValues={{
          id: user.user && user.user.id,
          email: user.user && user.user.email,
          fullName: user.user && user.user.fullName,
          ...settingsItem,
        }}
        {...this.props}
      />)
    }

  })
};

export default ChangeSettingsHoc;