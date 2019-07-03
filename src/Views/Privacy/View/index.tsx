import * as React from 'react';
import {PageTitle} from "../../../Components/PageTitle/PageTitle";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import {PrivacySection} from '../Components/PrivacySection/PrivacySection';
import PrivacySidebar from "../Components/PrivacySidebar/PrivacySidebar";
import content from './content.json';
import {StickyContainer} from 'react-sticky';

import {Section} from "react-smart-sections";
import LayoutWithSidebar from '../../../Containers/LayoutWithSidebar/LayoutWithSidebar';


export const Privacy = () => (
	<LayoutWithSidebar sidebarContent={<PrivacySidebar/>}>
		<Breadcrumbs history={[
			{
				name: 'Календарь',
				to: '/'
			},
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
				content && content.map((item: any, index: number) =>
					(<Section key={`privacy${index}`} title={item.title} name={item.title}>
						<PrivacySection title={item.title}>
							{item.content}
						</PrivacySection>
					</Section>))
			}
		</div>
	</LayoutWithSidebar>);

export default Privacy;
