import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwith() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<HStack>
			<Text>Light</Text>
			<Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
			<Text>Dark</Text>
		</HStack>
	);
}
