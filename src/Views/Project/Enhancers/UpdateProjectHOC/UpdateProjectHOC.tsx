import * as React from 'react';
import {compose, graphql, MutateProps} from 'react-apollo'

import UpdateProjectMutation from './UpdateProjectMutation.graphql';
import {IProject, IUpdateProjectData} from "../../../../Apollo/schema";
import Logging from "../../../../Helpers/Logging";
import {FORM_ERROR, FormApi} from "final-form";
import {GetMessageByTranslateKey} from "../../../../Shared/TranslateDict";
import {ApolloError} from 'apollo-boost';
import RefetchProjectListQueries from "../RefetchProjectListQueries/RefetchProjectListQueries";


interface IUpdateProjectHOCProps  extends MutateProps{
    [prop:string]: any
}

const enhance = compose(
  graphql<any, IUpdateProjectData>(UpdateProjectMutation));

const UpdateProjectHOC = (WrapperComponent: React.ElementType) => {
     return enhance(class extends React.Component<IUpdateProjectHOCProps | any> {


       updateProject = async (values: IProject, form: FormApi<IProject>) => {
         const {mutate,onClose} = this.props;

         const {message}: any = await mutate({
           variables: values,
           refetchQueries: [RefetchProjectListQueries()]
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
           onSubmit={this.updateProject}
           {...this.props}
         />
       }

     })
};

export default UpdateProjectHOC;