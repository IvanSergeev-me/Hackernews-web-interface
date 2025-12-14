import type { FunctionComponent } from "react";
import Bookmark from "../../../../Assets/bookmark.svg";
import style from "./FavoriteDisplay.module.scss";

interface IFavoriteDisplayProps {
  isFavorite: boolean;
  onBookmarkClick: () => void;
}

const FavoriteDisplay: FunctionComponent<IFavoriteDisplayProps> = ({
  isFavorite,
  onBookmarkClick,
}) => {
  return (
    <span className={style.bookmark_wrapper}>
      <Bookmark
        width={32}
        onClick={onBookmarkClick}
        className={isFavorite ? style.pressed : style.not_pressed}
      />
    </span>
  );
};

export default FavoriteDisplay;
