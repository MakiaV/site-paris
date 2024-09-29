"use client";

import Image, { StaticImageData } from "next/image";

type Props = {
	title: string;
	description: string;
	image: StaticImageData;
	badges: string[];
	theme: "light" | "dark";
};

const EatDrinkCard = ({ title, description, image, badges, theme }: Props) => {
	return (
		<div
			className={
				theme === "dark"
					? "border border-neutral-700"
					: "shadow-xl rounded-lg cursor-pointer"
			}
		>
			<div className="relative h-[250px] 2xl:h-[300px]">
				<Image src={image} alt={title} fill className="object-cover" />
			</div>

			<div className="p-4">
				<div className="flex text-white text-xs">
					{badges.map((badge) => (
						<p
							key={badge}
							className="bg-sky-900 px-4 py-2 rounded-xl mr-2"
						>
							{badge}
						</p>
					))}
				</div>
				<h2 className="text-2xl  font-bold my-4">{title}</h2>
				<p className="text-lg text-justify">{description}</p>
			</div>
		</div>
	);
};

export default EatDrinkCard;
