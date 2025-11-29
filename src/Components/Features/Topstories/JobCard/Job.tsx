import React from 'react';
import type { JobInfo } from '../../../../Pages/Topstories/types';
import style from './Job.module.scss';
import { unixTimeToDateTime } from '../../../../Utils/UnixTimeConverter/unixTimeToDateTime';
import LikeDisplay from '../../../UI/LikesDisplay/LikesDisplay';


const Job: React.FunctionComponent<JobInfo> = ({ id, title, by, text, score, time, type, url }) => {

    const dateTime = unixTimeToDateTime(time);

    return (
        <div className={style.job_container}>
            <div className={style.job_container__top}>
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
            <div className={style.job_container__middle}>
                <p className={style.type}>
                    <span className={style.type__text}>Type:</span> <span className={style.type__value}>{type}</span>
                </p>
            </div>
            <div className={style.job_container__bottom}>
                {text && <p className={style.text}>
                    {text}
                </p>}
            </div>
        </div>
    );
}

export default Job;