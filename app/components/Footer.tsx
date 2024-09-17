"use client";
import { usePathname } from "next/navigation";
import DayFooter from "./parisDay/DayFooter";
import NightFooter from "./parisNight/NightFooter";

const Footer = () => {
	const pathname = usePathname();

	return (
		<div>
			{pathname.includes("/night") ? <NightFooter /> : <DayFooter />}
		</div>
	);
};

export default Footer;
