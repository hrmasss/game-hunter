import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";

function App() {
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
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main" paddingX={5}>
				<GamesGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
