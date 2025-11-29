import { useState, type ChangeEvent, type FunctionComponent } from "react";
import type { IDropdownSelectProps, SelectOptionValue } from "./types";
import style from './DropdownSelect.module.scss';

const DropdownSelect: FunctionComponent<IDropdownSelectProps> = ({name, id, onChange, options, defaultValue}) => {

    const [currentValue, setCurrentValue] = useState<SelectOptionValue>(defaultValue? defaultValue:  options[0].value);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>{
        e.preventDefault();
        const newValue = e.target.value as SelectOptionValue
        setCurrentValue(newValue);
        onChange(newValue);
    }

    return ( 
        <div className={style.dropdown_container}>
            <select value={currentValue} name={name} id={id} onChange={handleChange}>
                {options.map(o=> {
                    return <option key={o.value} value={o.value}>{o.text}</option>
                })}
            </select>
        </div>
     );
}
 
export default DropdownSelect;