import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Skeleton,
	SkeletonText,
	Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

export default function GenreList({ onSelectGenre, selectedGenre }: Props) {
	const { genres, error, isLoading } = useGenres();
	const genreSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
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
						<Button
							whiteSpace="normal"
							variant="link"
							onClick={() => onSelectGenre(genre)}
						>
							<HStack>
								<Image
									src={getCroppedImageUrl(genre.image_background)}
									boxSize="48px"
									objectFit="cover"
									borderRadius={4}
								/>
								<Text
									align="left"
									fontSize="lg"
									fontWeight={
										genre.id === selectedGenre?.id ? "bold" : "normal"
									}
								>
									{genre.name}
								</Text>
							</HStack>
						</Button>
					</ListItem>
				))}
			</List>
		</>
	);
}
