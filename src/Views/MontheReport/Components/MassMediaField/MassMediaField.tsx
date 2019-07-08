import * as React from 'react';
import {Field, FieldProps} from "react-final-form";
import TextField from '../../../../Components/TextField/TextField';
import DeleteIcon from "../../../../Components/SvgIcons/DeleteIcon";

interface IMassMediaFieldProps {
  [prop: string]: any
}

const MassMediaField: React.FC<IMassMediaFieldProps> = ({name,index,onDelete, ...rest}) => {
  return (
    <div>
      <div style={{margin: 0}} className={'row between-xs'}>
        <div className={"report-cell_title"}>
          Ссылка {index}
        </div>
        <a onClick={onDelete} className="notifications-item__delete" href="javascript:void(0);">
          <DeleteIcon className="icon icon-delete" />
        </a>
      </div>
      <Field
        label={'Загловок новости'}
        name={`${name}.title`}
      >
        {
          (props: FieldProps<any, any>)=>(<TextField
            {...props}
          />)
        }
      </Field>
      <Field
        label={'Ссылка на источник'}
        name={`${name}.link`}
      >
        {
          (props: FieldProps<any, any>)=>(<TextField
            {...props}
          />)
        }
      </Field>
    </div>
  );
};

export default MassMediaField