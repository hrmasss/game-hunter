import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

export default function GenreList() {
	const { genres } = useGenres();
	return (
		<List>
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
