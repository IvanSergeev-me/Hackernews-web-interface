import type { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../Components/Router/routes";
import style from "./Favorites.module.scss";

interface IFavoritesHeadingProps {
  hasFavorites: boolean;
}

const FavoritesHeading: FunctionComponent<IFavoritesHeadingProps> = ({
  hasFavorites,
}) => {
  return (
    <div className={style.heading_wrapper}>
      {hasFavorites ? (
        <h1>
          HERE IS
          <br></br>
          YOUR FAVORITES
        </h1>
      ) : (
        <h1>
          NO FAVORITES FOUND.
          <br></br>
          ADD THEM ON <NavLink to={RouteNames.TOPSTORIES}>TOP STORIES</NavLink>
        </h1>
      )}
    </div>
  );
};

export default FavoritesHeading;
