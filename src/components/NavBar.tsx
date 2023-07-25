import { HStack, Image } from "@chakra-ui/react";
import icon from "../assets/icon.svg";
import ColorModeSwith from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

export default function NavBar() {
	return (
		<HStack>
			<Image src={icon} boxSize={"60px"} />
			<SearchBox />
			<ColorModeSwith />
		</HStack>
	);
}
