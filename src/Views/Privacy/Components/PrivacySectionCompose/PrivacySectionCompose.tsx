import * as React from 'react';
import {IPrivacyBlockEditEnhancerAPI} from '../../Enhancers/PrivacyBlockEditEnhancer/PrivacyBlockEditEnhancer';
import PrivacySection from "../PrivacySection/PrivacySection";
import {IPrivacyBlock} from "../../../../Apollo/schema";
import PrivacyBlockEditEnhancer from "../../Enhancers/PrivacyBlockEditEnhancer/PrivacyBlockEditEnhancer";
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";

interface IPrivacySectionComposeProps extends IPrivacyBlockEditEnhancerAPI {
  privacy: IPrivacyBlock;

  [prop: string]: any
}


const PrivacySectionEdit = React.lazy(() => import('../PrivacySectionEdit/PrivacySectionEdit'));

const PrivacySectionCompose: React.FC<IPrivacySectionComposeProps> = ({onSubmit, loading, isEdit, privacy, toggleEditMode}) => {
  return (
    <div style={{marginBottom: '30px'}}>
      <React.Suspense fallback={<Preloader
        style={{
          margin: '16px auto',
          display: 'block'
        }}
        theme={PreloaderThemeEnum.blue}
        size={PreloaderSizeEnum.md}
      />}>
        {
          isEdit &&
          <PrivacySectionEdit
              onSubmit={onSubmit}
              loading={loading}
              initialValues={privacy}
              cancelCallback={() => {
                toggleEditMode && toggleEditMode(false);
              }}
          />
        }
        {
          !isEdit && privacy &&
          <PrivacySection
              toggleEditMode={() => {
                toggleEditMode && toggleEditMode(true);
              }}
              {...privacy}
          />
        }
      </React.Suspense>
    </div>
  );
};

export default PrivacyBlockEditEnhancer(PrivacySectionCompose);