import * as React from 'react';

interface ITagListProps {
	[prop: string]: any
}

export const TagList: React.FC<ITagListProps> = () => (
	<div className="city-details__tags">
		<div className="city-details__tag">
			Реновация
		</div>
		<div className="city-details__tag">
			Модернизация
		</div>
		<div className="city-details__tag">
			Культура
		</div>
	</div>
);

export default TagList;
