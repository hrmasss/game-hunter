import { HStack, Image } from "@chakra-ui/react";
import icon from "../../public/icon.svg";
import ColorModeSwith from "./ColorModeSwitch";

export default function NavBar() {
	return (
		<HStack justify={"space-between"} padding={"10px 30px"}>
			<Image src={icon} boxSize={"60px"} />
			<ColorModeSwith />
		</HStack>
	);
}
