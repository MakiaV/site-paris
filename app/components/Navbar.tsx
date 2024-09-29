"use client";

import logo from "@/app/images/paris-1.png";
import { MoonStar, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
	const pathname = usePathname();
	const [discoverSlug, setDiscoverSlug] = useState(false);
	const [darkTheme, setDarkTheme] = useState(false);
	const [eventsSlug, setEventsSlug] = useState(false);

	const [eatAndDrinkSlug, setEatAndDrinkSlug] = useState(false);

	useEffect(() => {
		pathname.includes("/night") ? setDarkTheme(true) : setDarkTheme(false);
	}, [darkTheme, pathname]);

	useEffect(() => {
		pathname.includes("/discover")
			? setDiscoverSlug(true)
			: setDiscoverSlug(false);
	}, [discoverSlug, pathname]);

	useEffect(() => {
		pathname.includes("/events")
			? setEventsSlug(true)
			: setEventsSlug(false);
	}, [eventsSlug, pathname]);

	useEffect(() => {
		pathname.includes("/eat-and-drink")
			? setEatAndDrinkSlug(true)
			: setEatAndDrinkSlug(false);
	}, [eatAndDrinkSlug, pathname]);

	return (
		<div
			className={
				darkTheme
					? "flex justify-between items-center 2xl:px-48 px-24 py-4 bg-[#18181B]/40 border-b-[.1px] border-b-gray-500 text-white backdrop-blur-md z-50 font-bold"
					: "flex justify-between items-center  border border-b-gray-500 border-t-0 border-x-0 bg-sky-950/90 backdrop-blur-xs text-white px-24 2xl:px-48 py-4 z-50 font-bold"
			}
		>
			<Link href={darkTheme ? "/night" : "/"}>
				<Image src={logo} alt="logo" width={50} height={50} />
			</Link>
			<div className="space-x-8">
				<Link
					href={darkTheme ? "/night/discover" : "/discover"}
					className={
						discoverSlug
							? "underline decoration-yellow-600 underline-offset-4"
							: "hover:underline underline-offset-4"
					}
				>
					Découvir Paris
				</Link>
				<Link
					href={darkTheme ? "/night/events" : "/events"}
					className={
						eventsSlug
							? "underline decoration-yellow-600 underline-offset-4"
							: "hover:underline underline-offset-4"
					}
				>
					Evènements
				</Link>

				<Link
					href={darkTheme ? "/night/eat-and-drink" : "/eat-and-drink"}
					className={
						eatAndDrinkSlug
							? "underline decoration-yellow-600 underline-offset-4"
							: "hover:underline underline-offset-4"
					}
				>
					Manger et boire
				</Link>
			</div>

			<Link href={darkTheme ? "/" : "/night"}>
				<div className="flex gap-x-1 border border-blue-400 items-center rounded-md p-2 ">
					{/* <Image src={logo} alt="logo" width={30} height={30} /> */}

					{darkTheme ? <p>Paris by Day</p> : <p>Paris by Night</p>}
					{darkTheme ? <Sun /> : <MoonStar />}
				</div>
			</Link>
		</div>
	);
};

export default Navbar;
