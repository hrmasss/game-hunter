import useData from "./useData";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export default function usePlatforms() {
	const { data, error, isLoading } = useData<Platform>(
		"/platforms/lists/parents"
	);

	return { platforms: data, error, isLoading };
}
