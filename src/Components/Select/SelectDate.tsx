import * as React from 'react';
import {SelectDropDownList} from './SelectDropDownList';
import SelectDateToggle from "./SelectDateToggle";
import {ISelectBaseAPI} from "./withSelect";

interface ISelectDateProps extends ISelectBaseAPI {
  [prop: string]: any
}

export const SelectDate: React.FC<ISelectDateProps> = ({
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
                                                         currentEvent,
                                                         labelKey,
                                                         valueKey
                                                       }) => {
  return (
    <div ref={wrapperRef} className="jq-selectbox jqselect changed">
      <SelectDateToggle
        labelKey={labelKey}
        valueKey={valueKey}
        meta={meta}
        inputRef={inputRef}
        wrapperRef={wrapperRef}
        value={value}
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
      />

      <SelectDropDownList
        labelKey={labelKey}
        valueKey={valueKey}
        currentEvent={currentEvent}
        meta={meta}
        value={value}
        options={options}
        selected={selected}
        active={meta.active}
        onChange={onChange}
        onMenuHover={onMenuHover}
        indexActiveOption={indexActiveOption}
        styleScrollbars={{
          width: 200,
          height: 178,
        }}
      />
    </div>
  );
}

export default SelectDate;
