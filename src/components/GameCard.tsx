import { Card, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
	game: Game;
}

export default function GameCard({ game }: Props) {
	return (
		<Card>
			<Image src={game.background_image} />
			<Heading>{game.name}</Heading>
		</Card>
	);
}
