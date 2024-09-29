"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
	title: string;
	description: string;
	image: StaticImageData;
	link: string;
	date: string;
	location: string;
	genre: string;
	theme: "light" | "dark";
};

const EventCard = ({
	title,
	description,
	image,
	link,
	date,
	location,
	genre,
	theme,
}: Props) => {
	return (
		<div
			className={
				theme === "dark" ? "border border-neutral-700" : "shadow-xl"
			}
		>
			<div className="relative h-[250px] 2xl:h-[300px]">
				<Image src={image} alt={title} fill className="object-cover" />
			</div>
			<div className="mt-4">
				<div className="flex justify-between text-white text-xs">
					<p className="bg-sky-900 px-4 py-2">{location}</p>
					<p className="bg-sky-900 px-4 py-2">{genre}</p>
					<p className="bg-sky-900 px-4 py-2">{date}</p>
				</div>

				<div className="p-4">
					<h2 className="text-2xl  font-bold">{title}</h2>
					<p className="text-lg my-4 truncate">{description}</p>
					<Link
						className="rounded-2xl bg-sky-900 px-4 py-2 text-white font-bold hover:bg-sky-800"
						href={theme === "light" ? link : "/night" + link}
					>
						Voir l&#39;event
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
