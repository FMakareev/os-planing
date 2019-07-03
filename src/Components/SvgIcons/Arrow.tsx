import * as React from 'react';

interface IArrowProps {
	[prop: string]: any
}

export const Arrow: React.FC<IArrowProps> = () => (
	<svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd"
					d="M0.292895 0.292891C0.683421 -0.097632 1.31659 -0.0976302 1.70711 0.292895L5 3.5858L8.29289 0.292895C8.68341 -0.0976302 9.31658 -0.097632 9.7071 0.292891C10.0976 0.683414 10.0976 1.31658 9.70711 1.7071L5.70711 5.70713C5.51957 5.89466 5.26522 6.00002 5 6.00002C4.73478 6.00002 4.48043 5.89466 4.29289 5.70713L0.292891 1.7071C-0.097632 1.31658 -0.0976302 0.683414 0.292895 0.292891Z"
					fill="inherit"/>
	</svg>
)

export default Arrow;
