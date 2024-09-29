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
import img4 from "@/app/images/4.jpg";

import Image from "next/image";
import Link from "next/link";

const MyCarousel = () => {
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
			id: 4,
			name: "image 4",
			src: img4,
			title: "Un Voyage Culinaire Unique",
			subtitle:
				"Des bistrots traditionnels aux tables étoilées, découvrez les saveurs authentiques et innovantes de la gastronomie parisienne",
			link: "/eat-and-drink",
			linkText: "Manger et boire",
		},
	];
	const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

	return (
		<Carousel
			plugins={[plugin.current]}
			className=""
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent className="">
				{gallery.map((item) => (
					<CarouselItem
						key={item.id}
						className="relative w-full h-[70vh]"
					>
						<Image
							className="object-cover"
							src={item.src}
							alt={item.name}
							quality={100}
							priority
							fill
						/>
						<div className="absolute w-full h-full  top-0 left-0 bg-black/40"></div>
						<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center  text-white">
							<h1 className="text-7xl font-bold">{item.title}</h1>
							<p className="text-xl font-semibold my-4">
								{item.subtitle}
							</p>
							<Link
								href={item.link}
								className="z-40  bg-sky-950/90 rounded-md font-bold px-4 py-2 hover:bg-sky-950/60 transition-colors"
							>
								{item.linkText}
							</Link>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="ml-[70px]" />
			<CarouselNext className="mr-[70px]" />
		</Carousel>
	);
};

export default MyCarousel;
