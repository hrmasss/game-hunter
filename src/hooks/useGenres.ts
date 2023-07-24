import useData from "./useData";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

export default function useGenres() {
	const { data, error, isLoading } = useData<Genre>("/genres");
	return { genres: data, error, isLoading };
}
