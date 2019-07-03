import * as React from 'react';
import {SectionsSpy} from "react-smart-sections";
import classNames from 'classnames';
import {StickyContainer, Sticky} from 'react-sticky';
import {ScrollTo, linearTween} from '../../../../Helpers/ScrollTo';

interface IPrivacySidebarProps {
	[prop: string]: any
}

export const PrivacySidebar: React.FC<IPrivacySidebarProps> = () => (
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
									{section.name}
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
