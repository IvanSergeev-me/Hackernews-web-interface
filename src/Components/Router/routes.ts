import Favorites from "../../Pages/Favorites/Favorites";
import NotFound from "../../Pages/NotFound/NotFound";
import StoryDetailed from "../../Pages/StoryDetailed/StoryDetailed";
import Topstories from "../../Pages/Topstories/Topstories";

export interface IRoute {
  path: string;
  element: React.ComponentType;
  exact?: boolean;
  id?: number;
}

export const RouteNames = {
  LOGIN: "/Login",
  HOME: "/",
  WELCOME: "/welcome",
  TOPSTORIES: "/top-stories",
  TOPSTORY_DETAILS: "/top-stories/:id",
  FAVORITES: "/favorites",
  NO_MATCH: "*",
} as const;

export const publicRoutes: IRoute[] = [
  { path: RouteNames.HOME, element: Topstories },
  { path: RouteNames.TOPSTORIES, element: Topstories },
  { path: RouteNames.TOPSTORY_DETAILS, element: StoryDetailed },
  { path: RouteNames.NO_MATCH, element: NotFound },
  { path: RouteNames.FAVORITES, element: Favorites },
];
