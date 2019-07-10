import * as React from 'react';
import classNames from 'classnames';
import Scrollbars from 'react-custom-scrollbars';
import {ISelectBaseAPI} from './withSelect';
import SelectDropDownItem from "./SelectDropDownItem";

interface ISelectDropDownListProps extends ISelectBaseAPI {
  active?: boolean;
  styleScrollbars?: object;

  [prop: string]: any
}


export const SelectDropDownList: React.FC<ISelectDropDownListProps> = ({
                                                                         options,
                                                                         active,
                                                                         onChange,
                                                                         selected,
                                                                         styleScrollbars,
                                                                         meta,
                                                                         onMenuHover,
                                                                         indexActiveOption,
                                                                         currentEvent,
                                                                         labelKey,
                                                                         valueKey,
                                                                       }) => (
  <div
    onClick={(event)=>event.stopPropagation()}
    className={classNames("jq-selectbox__dropdown", {
      'active': active,
    })
    }>
    <Scrollbars style={styleScrollbars}>
      <ul>
        {
          options && options.map((item: any, idx: number) => (
            <SelectDropDownItem
              currentEvent={currentEvent}
              onMouseEnter={() => {
                onMenuHover && onMenuHover(item)
              }}
              tabIndex={-1}
              key={`option-${idx}`}
              onClick={() => onChange && onChange(item)}
              active={item[valueKey] === selected || indexActiveOption === idx}
              className={classNames({
                'sel': indexActiveOption === idx
              })}
            >
              {item[labelKey]}
            </SelectDropDownItem>
          ))
        }
        {
          meta &&
          meta.filterActive &&
          options &&
          !options.length &&
          <li className={'jq-selectbox__not-found'}>
              Совпадений не найдено
          </li>
        }

      </ul>
    </Scrollbars>
  </div>
);

export default SelectDropDownList;
