"use client";

import { usePathname } from "next/navigation";
import DayNavbar from "./parisDay/DayNavbar";
import NightNavbar from "./parisNight/NightNavbar";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<div className="z-50">
			{pathname.includes("/night") ? <NightNavbar /> : <DayNavbar />}
		</div>
	);
};

export default Navbar;
