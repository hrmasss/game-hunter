import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

export default function PlatformSelectionMenu() {
	const { platforms } = usePlatforms();

	if (platforms.length < 2) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Platforms
			</MenuButton>
			<MenuList>
				{platforms.map((platform) => (
					<MenuItem>{platform.name}</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}
