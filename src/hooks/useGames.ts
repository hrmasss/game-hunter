import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

export default function useGames(query: GameQuery) {
	const { data, error, isLoading } = useData<Game>(
		"/games",
		{
			params: {
				genres: query.genre?.id,
				parent_platforms: query.platform?.id,
				ordering: query.order,
				search: query.search,
			},
		},
		[query]
	);
	return { games: data, error, isLoading };
}
