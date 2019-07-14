import * as React from 'react';
import PrivacyBlockEditEnhancer, {IPrivacyBlockEditEnhancerAPI} from "../../Enhancers/PrivacyBlockEditEnhancer/PrivacyBlockEditEnhancer";
import Button from '../../../../Components/Button/Button';
import Preloader, {PreloaderPositionEnum, PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";

interface IPrivacyAddBlockProps extends IPrivacyBlockEditEnhancerAPI {
  [prop: string]: any
}

const PrivacySectionEdit = React.lazy(() => import('../PrivacySectionEdit/PrivacySectionEdit'));

const PrivacyAddBlock: React.FC<IPrivacyAddBlockProps> = ({
                                                            isEdit,
                                                            onSubmit,
                                                            loading,
                                                            toggleEditMode,
                                                            initialValues
                                                          }) => {
  return (
    <React.Suspense fallback={<Preloader
      style={{
        margin: '16px auto',
        display: 'block'
      }}
      theme={PreloaderThemeEnum.blue}
      size={PreloaderSizeEnum.md}
    />}>
      <Button onClick={() => {
        toggleEditMode(true);
      }}>
        Добавить раздел
      </Button>
      {
        isEdit && <PrivacySectionEdit
            onSubmit={onSubmit}
            loading={loading}
            initialValues={initialValues}
            cancelCallback={() => {
              toggleEditMode && toggleEditMode(false);
            }}
        />
      }
    </React.Suspense>
  );
};

export default PrivacyBlockEditEnhancer(PrivacyAddBlock);