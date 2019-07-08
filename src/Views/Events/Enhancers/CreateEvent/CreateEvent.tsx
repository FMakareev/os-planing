import * as React from 'react';

interface ICreateEventProps {
    [prop:string]: any
}

const CreateEvent = (WrapperComponent: React.ElementType) => {
     return class extends React.Component<ICreateEventProps> {     
        render(){
            return (<WrapperComponent {...this.props}/>);
        }     
     }
};

export default CreateEvent;