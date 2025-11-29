import type { FunctionComponent } from "react";
import type { StoryInfo } from "../../../Pages/Topstories/types";
import style from './StoryDetailedInfo.module.scss';
import { unixTimeToDateTime } from "../../../Utils/UnixTimeConverter/unixTimeToDateTime";
import LikeDisplay from "../../UI/LikesDisplay/LikesDisplay";

interface IStoryDetaiedDisplayProps {
    storyInfo: Omit<StoryInfo, "kids">;
}

const StoryDetaiedDisplay: FunctionComponent<IStoryDetaiedDisplayProps> = ({ storyInfo }) => {
    const {by,score,time,title,type,url} = storyInfo;
    const dateTime = unixTimeToDateTime(time);

    return (
        <div className={style.story_container}>
            <div className={style.story_container__top}>
                <div className={style.top__right}>
                    <p className={style.title}><a href={url}>{title}</a></p>
                    <div className={style.by_and_date}>
                        <p className={style.by}>By {by}</p>
                        <p className={style.time}>{dateTime}</p>
                    </div>
                </div>
                <div className={style.top__left}>
                    <LikeDisplay numberOfLikes={score} />
                </div>
            </div>
            <div className={style.story_container__middle}>
                <p className={style.type}>
                    <span className={style.type__text}>Type:</span> <span className={style.type__value}>{type}</span>
                </p>
            </div>
        </div>
    );
}

export default StoryDetaiedDisplay;