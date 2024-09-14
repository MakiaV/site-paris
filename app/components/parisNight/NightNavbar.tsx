import logo from "@/app/images/paris-1.png";

import { Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NightNavbar = () => {
	return (
		<div className="flex justify-between items-center px-24 py-4 bg-[#18181B]/90 border-b-[.1px] border-b-gray-500 text-white backdrop-blur-sm">
			<Link href="/night">
				<Image src={logo} alt="logo" width={50} height={50} />
			</Link>
			<div className="space-x-8">
				<Link href="/events">Evènements</Link>
				<Link href="/todos">À faire</Link>
				<Link href="/accommodation">Où séjourner</Link>
				<Link href="/night/eat-and-drink">Où manger</Link>
				<Link href="/night/party">Où sortir</Link>
			</div>

			<Link href="/">
				<div className="flex gap-x-1 border border-blue-400 items-center rounded-md p-2">
					<Image src={logo} alt="logo" width={30} height={30} />

					<p>Paris by Day</p>
					<Sun />
				</div>
			</Link>
		</div>
	);
};

export default NightNavbar;
