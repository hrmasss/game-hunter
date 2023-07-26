import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelectionMenu from "./components/PlatformSelectionMenu";
import { Platform } from "./hooks/usePlatforms";
import SortingSelectionMenu from "./components/SortingSelectionMenu";
import GamesHeading from "./components/GamesHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	order: string;
	search: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "sidebar main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<GridItem area="nav" padding={5}>
				<NavBar onSearch={(search) => setGameQuery({ ...gameQuery, search })} />
			</GridItem>
			<Show above="lg">
				<GridItem area="sidebar" paddingX={5}>
					<GenreList
						onSelectGenre={(genre) => {
							setGameQuery({ ...gameQuery, genre });
						}}
						selectedGenre={gameQuery.genre}
					/>
				</GridItem>
			</Show>
			<GridItem area="main" paddingX={5}>
				<GamesHeading gameQuery={gameQuery} />

				{/* TODO: This causes problems in responsive layout, need to implement vertical layout on smaller devices */}
				<HStack marginY={5} spacing={5}>
					<PlatformSelectionMenu
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
						selectedPlatform={gameQuery.platform}
					/>
					<SortingSelectionMenu
						onSelectOrder={(order) => setGameQuery({ ...gameQuery, order })}
						selectedtOrder={gameQuery.order}
					/>
				</HStack>
				<GamesGrid query={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
