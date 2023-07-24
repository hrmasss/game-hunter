import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaAndroid,
	FaLinux,
	FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
	platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
	pc: FaWindows,
	playstation: FaPlaystation,
	xbox: FaXbox,
	android: FaAndroid,
	linux: FaLinux,
	mac: FaApple,
	iphone: MdPhoneIphone,
	web: BsGlobe,
	nintendo: BsNintendoSwitch,
};

export default function PlatformIconList({ platforms }: Props) {
	return (
		<HStack marginY={2}>
			{platforms.map((platform) => (
				<Icon as={iconMap[platform.slug]} color="gray.500" />
			))}
		</HStack>
	);
}