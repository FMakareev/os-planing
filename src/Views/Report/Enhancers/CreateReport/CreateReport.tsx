import * as React from 'react';

interface ICreateReportProps {
    [prop:string]: any
}

const CreateReport = (WrapperComponent: React.ElementType) => {
     return class extends React.Component<ICreateReportProps> {     
        render(){
            return (<WrapperComponent {...this.props}/>);
        }     
     }
};

export default CreateReport;