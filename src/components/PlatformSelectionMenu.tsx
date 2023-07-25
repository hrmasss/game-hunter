import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

export default function PlatformSelectionMenu({
	onSelectPlatform,
	selectedPlatform,
}: Props) {
	const { platforms } = usePlatforms();

	if (platforms.length < 2) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform
					? `Platform: ${selectedPlatform?.name}`
					: "All Platforms"}
			</MenuButton>
			<MenuList>
				{platforms.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => onSelectPlatform(platform)}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}
