import type { FunctionComponent } from "react";
import style from './ItemsSkeleton.module.scss';

interface SkeletonProps {
    skeletonItems: number;
}

const ItemsSkeleton: FunctionComponent<SkeletonProps> = ({ skeletonItems }) => {

    const ItemsArray = Array.from({length: skeletonItems});

    return (
        <div className={style.skeleton_container}>
            {ItemsArray.map((_ , index)=> {
                return (
                    <div key={index} className={style.skeleton_container__item}></div>
                )
            })}
        </div>
    );
}

export default ItemsSkeleton;