import type { FunctionComponent } from "react";
import style from './LikeDisplay.module.scss';
import Heart from '../../../Assets/heart.svg';

interface LikeDisplayProps {
    numberOfLikes: number
}

const LikeDisplay: FunctionComponent<LikeDisplayProps> = ({ numberOfLikes }) => {
    return (
        <div className={style.like_container}>
            <Heart className={style.heart_svg}/><span className={style.like__number}>{numberOfLikes}</span>
        </div>
    );
}

export default LikeDisplay;