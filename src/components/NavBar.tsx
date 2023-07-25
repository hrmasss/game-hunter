import { HStack, Image } from "@chakra-ui/react";
import icon from "../assets/icon.svg";
import ColorModeSwith from "./ColorModeSwitch";

export default function NavBar() {
	return (
		<HStack justify={"space-between"}>
			<Image src={icon} boxSize={"60px"} />
			<ColorModeSwith />
		</HStack>
	);
}
