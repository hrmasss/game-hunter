import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelectionMenu from "./components/PlatformSelectionMenu";
import { Platform } from "./hooks/usePlatforms";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null
	);
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
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area="sidebar" paddingX={5}>
					<GenreList
						onSelectGenre={(genre) => {
							setSelectedGenre(genre);
						}}
						selectedGenre={selectedGenre}
					/>
				</GridItem>
			</Show>
			<GridItem area="main" paddingX={5}>
				<PlatformSelectionMenu
					onSelectPlatform={(platform) => setSelectedPlatform(platform)}
					selectedPlatform={selectedPlatform}
				/>
				<Box paddingY={5}>
					<GamesGrid genre={selectedGenre} platform={selectedPlatform}/>
				</Box>
			</GridItem>
		</Grid>
	);
}

export default App;
