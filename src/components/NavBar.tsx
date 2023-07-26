import { HStack, Image } from "@chakra-ui/react";
import icon from "../assets/icon.svg";
import ColorModeSwith from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

interface Props {
	onSearch: (searchQuery: string) => void;
}

export default function NavBar({ onSearch }: Props) {
	return (
		<HStack>
			<Image src={icon} boxSize={"60px"} />
			<SearchBox onSearch={(searchQuery) => onSearch(searchQuery)} />
			<ColorModeSwith />
		</HStack>
	);
}
