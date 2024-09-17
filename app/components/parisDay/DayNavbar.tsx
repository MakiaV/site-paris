"use client";

import logo from "@/app/images/paris-1.png";
import { MoonStar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DayNavbar = () => {
	return (
		<div className="flex justify-between items-center border border-b-gray-500 backdrop-blur-md px-24 py-4">
			<Link href="/">
				<Image src={logo} alt="logo" width={50} height={50} />
			</Link>
			<div className="space-x-8">
				<Link href="/discover">Découvir Paris</Link>
				<Link href="/events">Evènements</Link>
				<Link href="/todos">À faire</Link>
				<Link href="/accommodation">Où séjourner</Link>
				<Link href="/eat-and-drink">Manger et boire</Link>
			</div>

			<Link href="/night">
				<div className="flex gap-x-1 border border-blue-400 items-center rounded-md p-2">
					<Image src={logo} alt="logo" width={30} height={30} />

					<p>Paris by Night</p>
					<MoonStar />
				</div>
			</Link>
		</div>
	);
};

export default DayNavbar;
