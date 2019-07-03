import * as React from 'react';
import {StickyContainer, Sticky} from 'react-sticky';


export const LayoutWithSidebar: React.FC<any> = ({children, sidebarContent}) => {
	return (<StickyContainer>
		<div className="inner-cols">
			<div className="inner">
				{children}
			</div>
			<div className="right-col">
				<Sticky>
					{
						(props: any) => {
							const {isSticky} = props;
							return (<div
								style={isSticky ? {
									...props.style,
									position: 'fixed',
									top: '20px',
									width: '350px'
								} : props.style}>
								{sidebarContent}
							</div>)
						}
					}
				</Sticky>
			</div>
		</div>
	</StickyContainer>)
}


export default LayoutWithSidebar;
