import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

export default function useGames(
	selectedGenre: Genre | null,
	selectedPlatform: Platform | null
) {
	const { data, error, isLoading } = useData<Game>(
		"/games",
		{
			params: {
				genres: selectedGenre?.id,
				parent_platforms: selectedPlatform?.id,
			},
		},
		[selectedGenre, selectedPlatform]
	);
	return { games: data, error, isLoading };
}
