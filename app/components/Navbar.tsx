"use client";

import logo from "@/app/images/paris-1.png";
import { MoonStar, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
	const pathname = usePathname();
	const [darkTheme, setDarkTheme] = useState(false);
	const [discoverSlug, setDiscoverSlug] = useState(false);
	const [eventsSlug, setEventsSlug] = useState(false);
	const [eatAndDrinkSlug, setEatAndDrinkSlug] = useState(false);
	const [isOpen, setIsOpen] = useState(false); // State for mobile menu

	useEffect(() => {
		setDarkTheme(pathname.includes("/night"));
		setDiscoverSlug(pathname.includes("/discover"));
		setEventsSlug(pathname.includes("/events"));
		setEatAndDrinkSlug(pathname.includes("/eat-and-drink"));
	}, [pathname]);

	return (
		<div
			className={
				darkTheme
					? "flex justify-between items-center py-4 bg-[#18181B]/40 border-b-[.1px] border-b-gray-500 text-white backdrop-blur-md z-50 font-bold"
					: "flex justify-between items-center border border-b-gray-500 border-t-0 border-x-0 bg-sky-950/90 backdrop-blur-xs text-white py-4 z-50 font-bold"
			}
		>
			<div className="flex justify-between items-center w-full px-4  lg:px-24 2xl:px-48">
				<Link href={darkTheme ? "/night" : "/"}>
					<Image src={logo} alt="logo" width={50} height={50} />
				</Link>

				{/* Toggle Button for Mobile */}
				<div className="md:hidden flex items-center">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-white focus:outline-none"
					>
						{/* Mobile Menu Icon */}
						{isOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-8 text-sm sm:text-base ">
					<Link
						href={darkTheme ? "/night/discover" : "/discover"}
						className={
							discoverSlug
								? "underline decoration-yellow-600 underline-offset-4"
								: "hover:underline underline-offset-4"
						}
					>
						Découvrir Paris
					</Link>
					<Link
						href={darkTheme ? "/night/events" : "/events"}
						className={
							eventsSlug
								? "underline decoration-yellow-600 underline-offset-4"
								: "hover:underline underline-offset-4"
						}
					>
						Évènements
					</Link>
					<Link
						href={
							darkTheme
								? "/night/eat-and-drink"
								: "/eat-and-drink"
						}
						className={
							eatAndDrinkSlug
								? "underline decoration-yellow-600 underline-offset-4"
								: "hover:underline underline-offset-4"
						}
					>
						Manger et boire
					</Link>
				</div>

				{/* Theme Toggle */}
				<Link
					href={darkTheme ? "/" : "/night"}
					className="hidden md:flex"
				>
					<div className="hidden md:flex gap-x-1 border border-blue-400 items-center rounded-md p-2 text-sm sm:text-base ">
						{darkTheme ? (
							<p>Paris by Day</p>
						) : (
							<p>Paris by Night</p>
						)}
						{darkTheme ? <Sun /> : <MoonStar />}
					</div>
				</Link>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden w-full bg-sky-950/90 py-2 px-4 space-y-4 text-sm sm:text-base flex flex-col">
					<Link
						href={darkTheme ? "/night/discover" : "/discover"}
						className={
							discoverSlug
								? "underline decoration-yellow-600 underline-offset-4"
								: "hover:underline underline-offset-4"
						}
					>
						Découvrir Paris
					</Link>
					<Link
						href={darkTheme ? "/night/events" : "/events"}
						className={
							eventsSlug
								? "underline decoration-yellow-600 underline-offset-4"
								: "hover:underline underline-offset-4"
						}
					>
						Évènements
					</Link>
					<Link
						href={
							darkTheme
								? "/night/eat-and-drink"
								: "/eat-and-drink"
						}
						className={
							eatAndDrinkSlug
								? "underline decoration-yellow-600 underline-offset-4"
								: "hover:underline underline-offset-4"
						}
					>
						Manger et boire
					</Link>

					<Link href={darkTheme ? "/" : "/night"}>
						<div className="flex gap-x-1 border border-blue-400 items-center rounded-md p-2 text-sm sm:text-base">
							{darkTheme ? (
								<p>Paris by Day</p>
							) : (
								<p>Paris by Night</p>
							)}
							{darkTheme ? <Sun /> : <MoonStar />}
						</div>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
