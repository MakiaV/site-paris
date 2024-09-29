"use client";

import Image, { StaticImageData } from "next/image";

type Props = {
	title: string;
	description: string;
	image: StaticImageData;
	theme: "light" | "dark";
};

const MustHaveCard = ({ title, description, image, theme }: Props) => {
	return (
		<div
			className={
				theme === "dark"
					? "border border-neutral-700 cursor-pointer"
					: "shadow-xl cursor-pointer"
			}
		>
			<div className="relative h-[250px] 2xl:h-[300px]">
				<Image src={image} alt={title} fill className="object-cover" />
			</div>

			<div className="p-4">
				<h2 className="text-2xl  font-bold">{title}</h2>
				<p className="text-lg">{description}</p>
			</div>
		</div>
	);
};

export default MustHaveCard;
