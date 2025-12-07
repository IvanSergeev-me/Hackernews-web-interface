import type { FunctionComponent } from "react";
import DropdownSelect from "../../UI/Select/DropdownSelect";
import type { IDropdownSelectProps } from "../../UI/Select/types";
import style from './SortSection.module.scss';
import Divider from "../../UI/Divider/Divider";

interface ISortSectionProps {
    showDivider?:boolean;
    dropdownSelectProps: IDropdownSelectProps;
}
 
const SortSection: FunctionComponent<ISortSectionProps> = ({dropdownSelectProps,showDivider}) => {
    return ( 
        <div className={style.sort_section_container}>
            <div>
                <DropdownSelect {...dropdownSelectProps} label="Sort topstories"/>
            </div>
            
            {showDivider?<Divider />:null}
        </div>
     );
}
 
export default SortSection;