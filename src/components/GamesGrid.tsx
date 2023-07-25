import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
	genre: Genre | null;
	platform: Platform | null;
}

export default function GamesGrid({ genre, platform }: Props) {
	const { games, error, isLoading } = useGames(genre, platform);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, "2xl": 5 }} spacing={5}>
				{isLoading &&
					skeletons.map((index) => (
						<GameCardContainer key={index}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
}
