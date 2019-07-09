import * as React from 'react';
import {SelectDropDownList} from "./SelectDropDownList";
import {ISelectBaseAPI} from "./withSelect";
import {SelectToggleTextField} from './SelectToggleTextField';

interface ISelectDefaultProps extends ISelectBaseAPI {
  [prop: string]: any
}

export const SelectDefault: React.FC<ISelectDefaultProps> = ({
                                                               options,
                                                               selected,
                                                               meta,
                                                               value,
                                                               onFocus,
                                                               onBlur,
                                                               onChange,
                                                               onMenuHover,
                                                               label,
                                                               placeholder,
                                                               handleInputChange,
                                                               wrapperRef,
                                                               inputRef,
                                                               findSubstring,
                                                               indexActiveOption,
                                                               onKeyDown,
                                                               className,
                                                               currentEvent,
                                                             }) => (
  <SelectToggleTextField
    className={className}
    meta={meta}
    inputRef={inputRef}
    wrapperRef={wrapperRef}
    value={value}
    label={label}
    options={options}
    placeholder={placeholder}
    handleInputChange={handleInputChange}
    onKeyDown={onKeyDown}
    findSubstring={findSubstring}
    onClick={() => {
      if (!meta.active) {
        onFocus && onFocus();
      } else {
        onBlur && onBlur();
      }
    }}
  >
    <SelectDropDownList
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
  </SelectToggleTextField>
);

export default SelectDefault;
