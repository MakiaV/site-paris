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
import img3 from "@/app/images/3.jpg";

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
		{
			id: 3,
			name: "image 3",
			src: img3,
			title: "Infinies Possibilités de Découvertes",
			subtitle:
				"Des monuments iconiques aux activités insolites, explorez les mille et une facettes de la capitale",
			link: "/todos",
			linkText: "À faire",
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
			<CarouselContent className="">
				{gallery.map((item) => (
					<CarouselItem key={item.id}>
						<div className="grid grid-cols-2 h-[400px] rounded-xl border border-neutral-200">
							<div className="relative">
								<Image
									className="object-cover rounded-l-xl"
									src={item.src}
									alt={item.name}
									quality={100}
									priority
									fill
								/>
							</div>

							<div
								className={
									theme === "dark"
										? "text-white flex flex-col justify-center px-8 space-y-8"
										: "flex flex-col justify-center px-8 space-y-8"
								}
							>
								<h1 className="text-3xl font-bold">
									{item.title}
								</h1>
								<p className="text-justify text-lg">
									{item.subtitle}
								</p>
								<Link
									href={item.link}
									className="text-xl text-white text-center font-bold text-primary bg-sky-950 hover:bg-sky-950/90 rounded-md px-4 py-2"
								>
									{item.linkText}
								</Link>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="w-14 h-14 translate-y-56 translate-x-[40vw] 2xl:translate-x-[39vw] border border-sky-400/30" />
			<CarouselNext className="w-14 h-14 translate-y-56 -translate-x-[40vw] 2xl:-translate-x-[39vw] border border-sky-400/30" />
		</Carousel>
	);
};

export default SubCarousel;
