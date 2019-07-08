import * as React from 'react';

interface IUpdateMonthReportEnhanceProps {
    [prop:string]: any
}

const UpdateMonthReportEnhance = (WrapperComponent: React.ElementType) => {
     return class extends React.Component<IUpdateMonthReportEnhanceProps> {
        render(){
            return (<WrapperComponent {...this.props}/>);
        }
     }
};

export default UpdateMonthReportEnhance;