import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

export default function GamesHeading({ gameQuery }: Props) {
	const genre = gameQuery.genre?.name || "";
	const plaform = gameQuery.platform?.name || "";

	const heading = `${genre ? genre + " " : ""}Games${
		plaform ? " for " + plaform : ""
	}`;
	return <Heading as="h1">{heading}</Heading>;
}
