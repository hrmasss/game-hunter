import {
	HStack,
	Image,
	List,
	ListItem,
	Skeleton,
	SkeletonText,
	Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

export default function GenreList() {
	const { genres, error, isLoading } = useGenres();
	const genreSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<List>
			{(isLoading || error) &&
				genreSkeletons.map((index) => (
					<ListItem key={index} paddingY="5px">
						<HStack>
							<Skeleton boxSize="48px" borderRadius={4} />
							<SkeletonText width="64px" />
						</HStack>
					</ListItem>
				))}
			{genres.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							src={getCroppedImageUrl(genre.image_background)}
							boxSize="48px"
							objectFit="cover"
							borderRadius={4}
						/>
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
}
