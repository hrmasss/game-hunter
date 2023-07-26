import platforms from "../data/platforms";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export default function usePlatforms() {
	return { platforms: platforms, error: null, isLoading: false };
}
