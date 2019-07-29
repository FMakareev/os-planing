import * as React from 'react';
import Select from 'react-select';

interface ISelectDateProps {
    [prop:string]: any
}


export const ReactSelectDate: React.FC<ISelectDateProps> = (props) => {
    return (
         <Select
             {...props}
         />
       );
};

export default ReactSelectDate;