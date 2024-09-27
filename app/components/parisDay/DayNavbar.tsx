"use client";

import logo from "@/app/images/paris-1.png";
import { MoonStar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DayNavbar = () => {
	return (
		<div className="flex justify-between items-center  border border-b-gray-500 border-t-0 border-x-0 bg-sky-950/90 backdrop-blur-xs text-white px-24 py-4 z-50">
			{/* <div className="flex justify-between items-center border border-b-gray-500 bg-[#18181B]/80 backdrop-blur-xs text-white px-24 py-4  z-50"> */}

			<Link href="/">
				<Image src={logo} alt="logo" width={50} height={50} />
			</Link>
			<div className="space-x-8 font-bold">
				<Link href="/discover">Découvir Paris</Link>
				<Link href="/events">Evènements</Link>
				<Link href="/todos">À faire</Link>
				<Link href="/accommodation">Où séjourner</Link>
				<Link href="/eat-and-drink">Manger et boire</Link>
			</div>

			<Link href="/night">
				<div className="flex gap-x-1 border border-blue-400 items-center rounded-md p-2 font-bold">
					<Image src={logo} alt="logo" width={30} height={30} />

					<p>Paris by Night</p>
					<MoonStar />
				</div>
			</Link>
		</div>
	);
};

export default DayNavbar;
