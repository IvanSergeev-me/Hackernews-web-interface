import { type FunctionComponent } from "react";
import StoryList from "../../Components/Features/Topstories/StoryList";
import { useFavorites } from "../../Hooks/useFavorites";
import { useItems } from "../../Hooks/useItems";
import FavoritesHeading from "./FavoritesHeading";

const Favorites: FunctionComponent = () => {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const {
    data: topStories,
    isLoading,
    isError,
  } = useItems(favorites, undefined);

  const hasFavorites = favorites && favorites.length > 0;

  return (
    <section>
      <FavoritesHeading hasFavorites={hasFavorites} />
      <StoryList
        stories={topStories}
        isLoading={isLoading}
        isError={isError}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </section>
  );
};

export default Favorites;
