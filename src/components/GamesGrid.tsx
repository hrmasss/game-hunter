import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

export default function GamesGrid() {
	const { games, error } = useGames();
	return (
		<>
			{error && <Text>{error}</Text>}
			<ul>
				{games.map((game) => (
					<GameCard game={game} />
				))}
			</ul>
		</>
	);
}
