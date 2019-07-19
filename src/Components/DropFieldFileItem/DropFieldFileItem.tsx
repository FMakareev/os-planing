import * as React from 'react';
import {Close} from '../SvgIcons/Close';

interface IDropFieldFileItemProps {
  name: string;
  onClick: any;

  [prop: string]: any
}

export const DropFieldFileItem: React.FC<IDropFieldFileItemProps> = ({name, onClick}) => (
  <div className="files-item">
    <div className="files-item__name">
      {name}
    </div>
    <a
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      className="files-item__close"
      href="#!"
    >
      <Close className="icon icon-file-remove" height={'10px'} width={'10px'}/>
    </a>
  </div>
);

export default DropFieldFileItem;
