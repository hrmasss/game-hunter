import useData from "./useData";
import { Platform } from "./useGames";

export default function usePlatforms() {
	const { data, error, isLoading } = useData<Platform>(
		"/platforms/lists/parents"
	);

	return { platforms: data, error, isLoading };
}
