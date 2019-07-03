import * as React from 'react';
import {ISelectBaseAPI} from './withSelect';
import classNames from 'classnames';

interface ISelectToggleProps extends ISelectBaseAPI {
    className?: string;
    // [prop: string]: any
}

export const SelectToggleTextField: React.FC<ISelectToggleProps> = ({
                                                                        children,
                                                                        handleInputChange,
                                                                        placeholder,
                                                                        value,
                                                                        onClick,
                                                                        wrapperRef,
                                                                        inputRef,
                                                                        findSubstring,
                                                                        meta,
                                                                        onKeyDown,
                                                                        label,
                                                                        className
                                                                    }) => (
    <div onClick={onClick} ref={wrapperRef} className={classNames("form__group form__group--select",className)}>
        <div className="jq-selectbox jqselect form__select">
            <div className="jq-selectbox__select">
                <input
                    ref={inputRef}
                    className="jq-selectbox__select-text"
                    type="text"
                    value={meta && meta.focus ? findSubstring : value && value.label}
                    placeholder={placeholder}
                    onKeyDown={(event) => {
                        onKeyDown && onKeyDown(event.key);
                    }}
                    onChange={(event) => {
                        handleInputChange && handleInputChange(event.target.value);
                    }}
                />

                <div className="jq-selectbox__trigger">
                    <div className="jq-selectbox__trigger-arrow"/>
                </div>
            </div>
            {
                children
            }
        </div>
        <label className="form__label">{label}</label>
    </div>
);

export default SelectToggleTextField;
