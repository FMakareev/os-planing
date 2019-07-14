import * as React from 'react';
import {SectionsSpy} from "react-smart-sections";
import classNames from 'classnames';
import {StickyContainer, Sticky} from 'react-sticky';
import {ScrollTo, linearTween} from '../../../../Helpers/ScrollTo';
import {IPrivacyBlock} from "../../../../Apollo/schema";

interface IPrivacySidebarProps {
	privacyBlockList: IPrivacyBlock[];
	[prop: string]: any
}

export const PrivacySidebar: React.FC<IPrivacySidebarProps> = ({privacyBlockList}) => (
	<div className="inner-info">
		<SectionsSpy
			render={(sections: any) => (
				<div className="privacy-menu">
					{
						sections.map((section: any, index: number) => {
							return (
								<a
									key={`SectionsSpy-${index}`}
									onClick={(e) => {
										e.preventDefault();
										ScrollTo(section.yScrollPoint, 220, linearTween)
									}}
									className={classNames("privacy-menu__link", {
										'active': section.active,
									})}
									href={'!#'}
								>
									{privacyBlockList && privacyBlockList[index] && privacyBlockList[index].title || section.name}
								</a>
							)
						})
					}
				</div>
			)}
		/>
	</div>
);

export default PrivacySidebar;
