import * as React from 'react';
import {IProject} from "../../Apollo/schema";

interface ITagListProps {
  projects?: IProject[];

  [prop: string]: any
}

export const TagList: React.FC<ITagListProps> = ({projects}) => (
  <div className="city-details__tags">
    {
      projects && projects.map((item: IProject, idx: number) => (
        <div key={`TagList-${idx}`} className="city-details__tag">
          {item.name}
        </div>))
    }
  </div>
);

export default TagList;
