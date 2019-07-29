import * as React from 'react';
import {compose, graphql, MutateProps} from 'react-apollo'

import CreateProjectMutation from './CreateProjectMutation.graphql';
import {ICreateProjectData, IProject} from "../../../../Apollo/schema";
import Logging from "../../../../Helpers/Logging";
import {FORM_ERROR, FormApi} from "final-form";
import {GetMessageByTranslateKey} from "../../../../Shared/TranslateDict";
import {ApolloError} from 'apollo-boost';
import RefetchProjectListQueries from "../RefetchProjectListQueries/RefetchProjectListQueries";


interface IAddProjectHocProps  extends MutateProps{
    [prop:string]: any
}

const enhance = compose(
  graphql<any, ICreateProjectData>(CreateProjectMutation));

const AddProjectHoc = (WrapperComponent: React.ElementType) => {
     return enhance(class extends React.Component<IAddProjectHocProps | any> {
       createProject = async (values: IProject, form: FormApi<IProject>) => {


         const {mutate,onClose} = this.props;

         const {message}: any = await mutate({
           variables: {
             name: values.name,
           },
           refetchQueries: [
             RefetchProjectListQueries()
           ]
         })
           .catch((error: ApolloError) => {
             Logging(error.message, 'error');
             return JSON.parse(JSON.stringify(error));
           });

         if (message) {
           return {
             [FORM_ERROR]: GetMessageByTranslateKey(message),
           }
         } else {
           setTimeout(form.reset, 500);
           onClose && onClose();
         }
       };


       render(){
         const {result} = this.props;
         return <WrapperComponent
           loading={result.loading}
           onSubmit={this.createProject}
           {...this.props}
         />
       }

     })
};

export default AddProjectHoc;