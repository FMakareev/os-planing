import * as React from 'react';
import {PageTitle} from "../../../Components/PageTitle/PageTitle";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import PrivacySidebar from "../Components/PrivacySidebar/PrivacySidebar";
import {Section} from "react-smart-sections";
import LayoutWithSidebar from '../../../Containers/LayoutWithSidebar/LayoutWithSidebar';
import PrivacyBlockListEnhancer from "../Enhancers/PrivacyBlockListEnhancer/PrivacyBlockListEnhancer";
import {IPrivacyBlock, UserRoleEnum} from "../../../Apollo/schema";
import PrivacySectionCompose from '../Components/PrivacySectionCompose/PrivacySectionCompose';
import PrivacyAddBlock from "../Components/PrivacyAddBlock/PrivacyAddBlock";
import CheckAccess, {ICheckAccessApi} from "../../../Enhancers/CheckAccess/CheckAccess";


interface IProps {
  privacyBlockList: IPrivacyBlock[];
}

export const Privacy: React.FC<IProps> = ({privacyBlockList}) => {
  return (
    <LayoutWithSidebar sidebarContent={<PrivacySidebar privacyBlockList={privacyBlockList}/>}>
      <Breadcrumbs history={[
        {
          name: 'Соглашение на обработку персональных данных',
          to: '/privacy'
        },
      ]}/>
      <PageTitle>
        Соглашение на обработку персональных данных
      </PageTitle>
      <div className="inner__content">
        {
          privacyBlockList && privacyBlockList.map((item: IPrivacyBlock, index: number) => {
            return (<Section key={`privacy${index}`} name={item.title}>
              <PrivacySectionCompose privacy={item}/>
            </Section>)
          })
        }
        <CheckAccess
          accessRights={UserRoleEnum.admin}
          render={({access}: ICheckAccessApi) => {
            if (!access) return null;
            return (
              <PrivacyAddBlock
                initialValues={{
                  index: privacyBlockList.length
                }}
              />
            )
          }}/>
      </div>
    </LayoutWithSidebar>);
};

export default PrivacyBlockListEnhancer(Privacy);
