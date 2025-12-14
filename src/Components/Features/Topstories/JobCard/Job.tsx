import React, { memo, useState } from "react";
import type { JobInfo } from "../../../../Pages/Topstories/types";
import style from "./Job.module.scss";
import { unixTimeToDateTime } from "../../../../Utils/UnixTimeConverter/unixTimeToDateTime";
import LikeDisplay from "../../../UI/LikesDisplay/LikesDisplay";
import FavoriteDisplay from "../FavoriteDisplay/FavoriteDisplay";

interface IJobCardProps extends JobInfo {
  isFavorite: boolean;
  onToggleFavorite: (storyId: number) => void;
}

const Job: React.FunctionComponent<IJobCardProps> = ({
  id,
  title,
  by,
  text,
  score,
  time,
  type,
  url,
  isFavorite,
  onToggleFavorite,
}) => {
  const dateTime = unixTimeToDateTime(time);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleFavoriteClick = () => {
    onToggleFavorite(id);
  };

  return (
    <div
      className={style.job_container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style.job_container__top}>
        <div className={style.top__right}>
          <p className={style.title}>
            <a href={url}>{title}</a>
          </p>
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
          <span className={style.type__text}>Type:</span>{" "}
          <span className={style.type__value}>{type}</span>
        </p>
      </div>
      <div className={style.job_container__bottom}>
        {text && <p className={style.text}>{text}</p>}
      </div>
      {isHovered && (
        <FavoriteDisplay
          isFavorite={isFavorite}
          onBookmarkClick={handleFavoriteClick}
        />
      )}
    </div>
  );
};

export default memo(Job);
