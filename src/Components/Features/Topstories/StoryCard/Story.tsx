import React from 'react';
import type { StoryShortInfo } from '../../../../Pages/Topstories/types';
import style from './Story.module.scss';
import { unixTimeToDateTime } from '../../../../Utils/UnixTimeConverter/unixTimeToDateTime';
import LikeDisplay from '../../../UI/LikesDisplay/LikesDisplay';
import { NavLink } from 'react-router-dom';
import { RouteNames } from '../../../Router/routes';


const Story: React.FunctionComponent<StoryShortInfo> = ({ id, title, by, descendants, score, time, type, url }) => {

    const dateTime = unixTimeToDateTime(time);

    const routeName = RouteNames.TOPSTORY_DETAILS.replace(':id', id.toString());

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
            <div className={style.story_container__bottom}>
                <p className={style.descendants}>
                    <span className={style.descendants__text}>Descendants:</span>
                    <span className={style.descendants__value}> {descendants}</span>
                </p>
                <NavLink to={routeName} className={style.bottom__link}>Go to discussion</NavLink>
            </div>
        </div>
    );
}

export default Story;