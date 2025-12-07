import { useState, type ChangeEvent, type FunctionComponent } from "react";
import type { IDropdownSelectProps, SelectOptionValue } from "./types";
import style from './DropdownSelect.module.scss';

const DropdownSelect: FunctionComponent<IDropdownSelectProps> = ({ name, id, onChange, options, defaultValue, label, value }) => {

    const [currentValue, setCurrentValue] = useState<SelectOptionValue>(defaultValue ? defaultValue : value);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const newValue = e.target.value as SelectOptionValue
        setCurrentValue(newValue);
        onChange(newValue);
    }

    return (
        <div className={style.dropdown_container}>
            {label &&
                <div className={style.label_wrapper}>
                    <label className={style.label} about={id}>{label}</label>
                </div>

            }
            <div className={style.dropdown_container__select_wrapper}>
                <select value={currentValue} name={name} id={id} onChange={handleChange}>
                    {options.map(o => {
                        return <option key={o.value} value={o.value}>{o.text}</option>
                    })}
                </select>
            </div>
        </div>
    );
}

export default DropdownSelect;