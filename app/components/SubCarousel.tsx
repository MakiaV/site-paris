"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "@/app/images/1.jpg";
import img2 from "@/app/images/2.jpg";

import Image from "next/image";
import Link from "next/link";

const SubCarousel = ({ theme }: { theme: "light" | "dark" }) => {
	const gallery = [
		{
			id: 1,
			name: "image 1",
			src: img1,
			title: "À la Découverte d'une Capitale Inoubliable",
			subtitle:
				"Parcourez ses avenues historiques, ses musées mondialement connus et ses charmants quartiers pleins de vie",
			link: "/discover",
			linkText: "Découvrir",
		},
		{
			id: 2,
			name: "image 2",
			src: img2,
			title: "Capitale des Événements et des Festivités",
			subtitle:
				"Concerts, expositions, festivals... Vivez l'effervescence culturelle et artistique tout au long de l'année",
			link: "/events",
			linkText: "Evénements",
		},
	];
	const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

	return (
		<Carousel
			plugins={[plugin.current]}
			className="mt-8 mb-20 2xl:mt-28"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent>
				{gallery.map((item) => (
					<CarouselItem key={item.id}>
						<div className="grid grid-cols-1 md:grid-cols-2 md:h-[400px]">
							<div className="relative h-[200px] md:h-[400px]">
								<Image
									className="object-cover rounded-l-xl"
									src={item.src}
									alt={item.name}
									fill
									loading="lazy"
								/>
							</div>

							<div
								className={
									theme === "dark"
										? "text-white flex flex-col justify-center px-8 space-y-8"
										: "flex flex-col justify-center px-8 space-y-8"
								}
							>
								<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
									{item.title}
								</h1>
								<p className="text-md md:text-lg lg:text-xl">
									{item.subtitle}
								</p>

								<Link
									href={
										theme === "light"
											? item.link
											: "/night" + item.link
									}
									className=" text-white text-center font-bold text-primary bg-sky-950 hover:bg-sky-950/90 rounded-md px-4 py-2"
								>
									{item.linkText}
								</Link>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="w-10 h-10 md:w-14 md:h-14 translate-y-40 md:translate-y-56" />
			<CarouselNext className="w-10 h-10 md:w-14 md:h-14 translate-y-40 md:translate-y-56" />
		</Carousel>
	);
};

export default SubCarousel;
