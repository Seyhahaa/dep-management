import { useDataStore } from "../src/store/getDataStore"

export function useFavorites() {
  const favoritesStore = useDataStore()

  return {
    favorites: favoritesStore.favorites,
    favoritesCount: favoritesStore.favoritesCount,
    isFavorite: favoritesStore.isFavorite,
    getFavoriteById: favoritesStore.getFavoriteById,
    addToFavorites: favoritesStore.addToFavorites,
    removeFromFavorites: favoritesStore.removeFromFavorites,
    toggleFavorite: favoritesStore.toggleFavorite,
    clearAllFavorites: favoritesStore.clearAllFavorites
  }
}