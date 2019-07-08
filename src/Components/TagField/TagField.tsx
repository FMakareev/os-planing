import * as React from 'react';
import {TagList} from '../TagList/TagList';
import plus from '../../Assets/img/spritesvg/plus.svg';

interface ITagFieldProps {
	[prop: string]: any
}


export class TagField extends React.Component<ITagFieldProps> {

	render() {
		return (
			<div>
				<TagList/>
				<div className="add-category">
					<a className="add-category__link" href="javascript:void(0);">
						<img src={plus} className="icon icon-plus "/>
						Добавить категорию
					</a>
					<ul className="add-category__dropdown">
						<li><a className="disabled" href="javascript:void(0);">Категория 1</a></li>
						<li><a className="disabled" href="javascript:void(0);">Категория 2</a></li>
						<li><a className="disabled" href="javascript:void(0);">Категория 3</a></li>
						<li><a href="javascript:void(0);">Категория 4</a></li>
						<li><a href="javascript:void(0);">Категория 5</a></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default TagField;
