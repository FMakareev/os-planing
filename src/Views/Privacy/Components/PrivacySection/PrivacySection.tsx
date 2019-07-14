import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {IPrivacyBlock, UserRoleEnum} from "../../../../Apollo/schema";
import Button from '../../../../Components/Button/Button';
import CheckAccess, {ICheckAccessApi} from "../../../../Enhancers/CheckAccess/CheckAccess";

interface IPrivacySectionProps extends IPrivacyBlock {
  [prop: string]: any
}

export const PrivacySection: React.FC<IPrivacySectionProps> = ({id, title, content, toggleEditMode}) => (
  <div id={id}>
    <h2 className="h2">
      {title}
    </h2>
    <div style={{marginBottom: '16px'}}>
      {content && ReactHtmlParser(content)}
    </div>
    <CheckAccess
      accessRights={UserRoleEnum.admin}
      render={({access}: ICheckAccessApi) => {
        if (!access) return null;
        return (
          <Button onClick={toggleEditMode}>
            Редактировать
          </Button>
        )
      }}/>
  </div>
);

export default PrivacySection;
