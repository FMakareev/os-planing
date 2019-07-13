import * as React from 'react';
import {TagList} from '../TagList/TagList';
import withSelect, {ISelectBaseAPI} from "../Select/withSelect";
import {SelectDropDownList} from "../Select/SelectDropDownList";
import PlusIcon from "../SvgIcons/PlusIcon";
import {InvalidFeedback} from "../InvalidFeedback/InvalidFeedback";

interface ITagFieldProps extends ISelectBaseAPI {
  [prop: string]: any
}


export const TagField: React.FC<ITagFieldProps> = ({
                                                     currentEvent,
                                                     value,
                                                     meta,
                                                     options,
                                                     selected,
                                                     onChange,
                                                     onMenuHover,
                                                     indexActiveOption,
                                                     onFocus,
                                                     onBlur,
                                                     onRemoveValueByIdx,
                                                     metaInput,
                                                     labelKey,
                                                     valueKey,
                                                   }) => {

  const error = metaInput && metaInput.touched ? (metaInput.error || metaInput.submitError) : null;
  return (
    <div>
      <TagList
        labelKey={'name'}
        valueKey={'id'}
        onClick={(index: number) => {
          onRemoveValueByIdx && onRemoveValueByIdx(index)
        }}

        projects={Array.isArray(value) && value}
      />
      <div className="add-category jq-selectbox jqselect changed">
        <a
          onClick={() => {
            if (!meta.active) {
              onFocus && onFocus();
            } else {
              onBlur && onBlur();
            }
          }}
          className="add-category__link"
          href="javascript:void(0);"
        >
          <PlusIcon className="icon icon-plus "/>
          Добавить Категорию
        </a>
        {
          error && (<InvalidFeedback error={error}/>)
        }
        <SelectDropDownList
          style={{margin: 0}}
          labelKey={labelKey}
          valueKey={valueKey}
          currentEvent={currentEvent}
          value={value}
          meta={meta}
          options={options}
          selected={selected}
          active={meta.active}
          onChange={onChange}
          onMenuHover={onMenuHover}
          indexActiveOption={indexActiveOption}
          styleScrollbars={{
            // width: 268,
            height: 178,
          }}
        />
      </div>
    </div>
  )
}

export default withSelect(TagField)();
