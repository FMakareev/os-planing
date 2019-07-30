import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {IPrivacyBlock, UserRoleEnum} from "../../../../Apollo/schema";
import CheckAccess, {ICheckAccessApi} from "../../../../Enhancers/CheckAccess/CheckAccess";

interface IPrivacySectionProps extends IPrivacyBlock {
  [prop: string]: any
}

const PrivacySectionControl = React.lazy(() => import('../PrivacySectionControl/PrivacySectionControl'));

export const PrivacySection: React.FC<IPrivacySectionProps> = ({id, title, content, onDelete, toggleEditMode}) => (
  <div id={id}>
    <h2 className="h2">
      {title}
    </h2>
    <div style={{marginBottom: '16px'}} className={'text-content'}>
      {content && ReactHtmlParser(content)}
    </div>
    <CheckAccess
      accessRights={UserRoleEnum.admin}
      render={({access}: ICheckAccessApi) => {
        if (!access) return null;
        return (
          <PrivacySectionControl
            id={id}
            onDelete={onDelete}
            toggleEditMode={toggleEditMode}
          />
        )
      }}/>
  </div>
);

export default PrivacySection;
