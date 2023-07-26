import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScoreBadge from "./CriticScoreBadge";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	game: Game;
}

export default function GameCard({ game }: Props) {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<Heading fontSize={"2xl"}>{game.name}</Heading>
				<HStack justify="space-between">
					{game.parent_platforms && (
						<PlatformIconList
							platforms={game.parent_platforms.map(
								(platform) => platform.platform
							)}
						/>
					)}
					<CriticScoreBadge score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
}
