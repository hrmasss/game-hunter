import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
	onSearch: (searchQuery: string) => void;
}

export default function SearchBox({ onSearch }: Props) {
	const ref = useRef<HTMLInputElement>(null);
	return (
		<InputGroup>
			<InputLeftElement children={<BsSearch />} />
			<Input
				ref={ref}
				borderRadius={20}
				variant="filled"
				placeholder="Search Games..."
				onChange={() => {
					if (ref.current) onSearch(ref.current?.value);
				}}
			/>
		</InputGroup>
	);
}
