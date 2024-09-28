"use client";
import logo from "@/app/images/paris-1.png";

import { Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NightNavbar = () => {
	const pathname = usePathname();
	const [discoverSlug, setDiscoverSlug] = useState(false);
	const [eventsSlug, setEventsSlug] = useState(false);
	const [todosSlug, setTodosSlug] = useState(false);
	const [accommodationSlug, setAccommodationSlug] = useState(false);
	const [eatAndDrinkSlug, setEatAndDrinkSlug] = useState(false);

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
		pathname.includes("/todos") ? setTodosSlug(true) : setTodosSlug(false);
	}, [todosSlug, pathname]);

	useEffect(() => {
		pathname.includes("/accommodation")
			? setAccommodationSlug(true)
			: setAccommodationSlug(false);
	}, [accommodationSlug, pathname]);

	useEffect(() => {
		pathname.includes("/eat-and-drink")
			? setEatAndDrinkSlug(true)
			: setEatAndDrinkSlug(false);
	}, [eatAndDrinkSlug, pathname]);
	return (
		<div className="flex justify-between items-center px-24 py-4 bg-[#18181B]/40 border-b-[.1px] border-b-gray-500 text-white backdrop-blur-md z-50 font-bold">
			<Link href="/night">
				<Image src={logo} alt="logo" width={50} height={50} />
			</Link>
			<div className="space-x-8">
				<Link
					href="/night/discover"
					className={
						discoverSlug
							? "underline decoration-yellow-600 underline-offset-4"
							: "hover:underline underline-offset-4"
					}
				>
					Découvir Paris
				</Link>
				<Link
					href="/night/events"
					className={
						eventsSlug
							? "underline decoration-yellow-600 underline-offset-4"
							: "hover:underline underline-offset-4"
					}
				>
					Evènements
				</Link>
				<Link
					href="/night/todos"
					className={
						todosSlug
							? "underline decoration-yellow-600 underline-offset-4"
							: "hover:underline underline-offset-4"
					}
				>
					À faire
				</Link>
				<Link
					href="/night/accommodation"
					className={
						accommodationSlug
							? "underline decoration-yellow-600 underline-offset-4"
							: "hover:underline underline-offset-4"
					}
				>
					Où séjourner
				</Link>
				<Link
					href="/night/eat-and-drink"
					className={
						eatAndDrinkSlug
							? "underline decoration-yellow-600 underline-offset-4"
							: "hover:underline underline-offset-4"
					}
				>
					Manger et boire
				</Link>
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
