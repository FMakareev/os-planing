import * as React from 'react';
import {IProject} from "../../Apollo/schema";
import Close from "../SvgIcons/Close";

interface ITagListProps {
  projects?: IProject[] | boolean;

  [prop: string]: any
}

export const TagList: React.FC<ITagListProps> = ({projects, onClick}) => (
  <div className="city-details__tags">
    {
      Array.isArray(projects) && projects.map((item: IProject, idx: number) => (
        <div key={`TagList-${idx}`} className="city-details__tag">
          {item.name}
          {
            onClick &&
            <a onClick={() => onClick(idx)} className="tag-close" href="javascript:void(0);">
                <Close className={"icon icon-close "}/>
            </a>
          }
        </div>))
    }
  </div>
);

export default TagList;
