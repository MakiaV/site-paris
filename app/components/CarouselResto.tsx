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

import { restos } from "@/data/restos";

import Image from "next/image";

const CarouselResto = ({ theme }: { theme: "light" | "dark" }) => {
	const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

	return (
		<Carousel
			plugins={[plugin.current]}
			className="mt-8 mb-20"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent className="">
				{restos.map((item) => (
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
									theme === "light"
										? "flex flex-col justify-center px-8 space-y-8"
										: "flex flex-col justify-center px-8 space-y-8 text-white"
								}
							>
								<h1 className="text-3xl font-bold">
									{item.title}
								</h1>
								<p className="text-justify text-lg">
									{item.description}
								</p>
								<div className="flex space-x-4 font-bold">
									<p>Adresse:</p>

									<p>{item.address}</p>
								</div>
								<button className="text-xl text-white text-center font-bold text-primary bg-sky-950 hover:bg-sky-950/90 rounded-md px-4 py-2">
									Visitez
								</button>
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

export default CarouselResto;
