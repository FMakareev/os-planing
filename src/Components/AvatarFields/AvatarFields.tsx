import * as React from 'react';
import {UserAvatar} from "../UserAvatar/UserAvatar";
import PhotoIcon from "../../Assets/img/spritesvg/photo.svg";
import {FieldInputProps, FieldMetaState} from "react-final-form";
import {InvalidFeedback} from "../InvalidFeedback/InvalidFeedback";
import Logging from "../../Helpers/Logging";

interface IAvatarFieldsProps {
  input?: FieldInputProps<{
    file: any,
    preview: string
    url?: string
  }, any>;
  meta?: FieldMetaState<any>;

  [prop: string]: any;
}

interface IAvatarFieldsState {
  [prop: string]: any;
}

export class AvatarFields extends React.Component<IAvatarFieldsProps, IAvatarFieldsState> {

  uploadFile = (event: any) => {
    try {
      const {input} = this.props;
      const reader: FileReader = new FileReader();
      const file = event.target.files[0];

      reader.onloadend = function () {
        input && input.onChange({
          file,
          preview: reader.result,
        });
      };
      reader.onerror = () => {
        console.log(reader.error);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      Logging(error, 'error')
    }
  };

  render() {
    const {meta, input, label} = this.props;
    const error = meta && meta.touched ? meta.error || meta.submitError : null;
    return (<div className="change-ava">

      <UserAvatar
        avatar={input && input.value && (input.value.preview || input.value.url)}
        className={'change-ava__img'}
      />
      <button className="change-ava__link">
        <img src={PhotoIcon} className="icon icon-photo "/>
        {label}
      </button>

      {
        error && (<InvalidFeedback error={error}/>)
      }
      <input
        style={{
          opacity: 0,
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          cursor: 'pointer'
        }}
        onChange={this.uploadFile}
        accept={"image/jpeg, image/pjpeg, image/png"}
        type="file"
        name=""
        id=""
      />
    </div>)
  }
}

export default AvatarFields;