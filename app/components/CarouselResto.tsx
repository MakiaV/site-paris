"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { restos } from "@/data/restos";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

const CarouselResto = ({ theme }: { theme: "light" | "dark" }) => {
	const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

	return (
		<Carousel
			plugins={[plugin.current]}
			className="mt-8 mb-20"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent>
				{restos.map((item) => (
					<CarouselItem key={item.id}>
						<div className="grid grid-cols-1 md:grid-cols-2 md:h-[400px] rounded-xl border border-neutral-200 pb-2">
							<div className="relative  h-[200px] md:h-[400px]">
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
									{item.description}
								</p>
								<div className="flex space-x-4 font-bold">
									<p>Adresse:</p>
									<p>{item.address}</p>
								</div>
								<button className=" text-white text-center font-bold text-primary bg-sky-950 hover:bg-sky-950/90 rounded-md px-4 py-2">
									Visitez
								</button>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="w-10 h-10 translate-y-72 translate-x-[40vw] 2xl:translate-x-[39vw] border border-sky-400/30 md:translate-y-56" />
			<CarouselNext className="w-10 h-10 translate-y-72 -translate-x-[40vw] 2xl:-translate-x-[39vw] border border-sky-400/30 md:translate-y-56" />
		</Carousel>
	);
};

export default CarouselResto;
