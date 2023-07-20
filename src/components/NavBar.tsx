import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwith from "./ColorModeSwitch";

export default function NavBar() {
	return (
		<HStack justify={"space-between"} padding={"10px 30px"}>
			<Image src={logo} boxSize={"60px"} />
			<ColorModeSwith />
		</HStack>
	);
}
