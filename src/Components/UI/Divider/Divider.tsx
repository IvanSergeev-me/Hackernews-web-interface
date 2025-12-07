import type { FunctionComponent } from "react";
import style from './Divider.module.scss';

interface IDividerProps {

}

const Divider: FunctionComponent<IDividerProps> = () => {
    return (
        <div className={style.divider_wrapper}>
            <span >
            </span>
        </div>

    );
}

export default Divider;