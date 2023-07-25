import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectOrder: (orderBy: string) => void;
	selectedtOrder: string;
}

export default function SortingSelectionMenu({
	onSelectOrder,
	selectedtOrder = "",
}: Props) {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "name", label: "Name" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Rating" },
		{ value: "-released", label: "Release Date" },
	];
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedtOrder !== ""
					? sortOrders.map((order) =>
							order.value === selectedtOrder ? `Order By: ${order.label}` : ""
					  )
					: "Order By: Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						key={order.value}
						value={order.value}
						onClick={() => onSelectOrder(order.value)}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}
