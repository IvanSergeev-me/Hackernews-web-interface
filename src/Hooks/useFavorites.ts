import { useCallback, useEffect, useState } from "react"
import type { FavoriteItems, ItemId } from "../Pages/Topstories/types";

export const favoriteItemsKey = 'favoriteItems'

interface IUseFavoritesReturn {
    isFavorite: (id: ItemId) => boolean;
    toggleFavorite: (id: ItemId) => void;
    favorites: FavoriteItems;
}

export const useFavorites = (): IUseFavoritesReturn => {
    const [favorites, setFavorites] = useState<FavoriteItems>([]);

    useEffect(() => {
        const currentStoredFavorites = localStorage.getItem(favoriteItemsKey);

        if (currentStoredFavorites) setFavorites(JSON.parse(currentStoredFavorites));

    }, []);

    const toggleFavorite = useCallback((id: ItemId) => {
        setFavorites(prevFavorites => {
            const isCurrentlyFavorite = prevFavorites.includes(id);
            const newFavorites = isCurrentlyFavorite
                ? prevFavorites.filter(favId => favId !== id)
                : [...prevFavorites, id];

            localStorage.setItem(favoriteItemsKey, JSON.stringify(newFavorites));
            return newFavorites;
        });
    }, [favorites]);

    const isFavorite = useCallback((id: ItemId) => { return favorites.includes(id) }, [favorites])

    return {
        isFavorite,
        toggleFavorite,
        favorites,
    }
}