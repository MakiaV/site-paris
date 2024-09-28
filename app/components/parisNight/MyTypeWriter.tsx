"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";

export function MyTypewriterEffect() {
	const words = [
		{
			text: "Paris",
		},
		{
			text: "ville",
		},
		{
			text: "lumière",
		},
	];
	return (
		<div className=" text-white absolute w-full top-0 left-0 h-full flex flex-col justify-center items-center">
			<TypewriterEffect words={words} />
			<div className="mt-8">
				<Link
					href="/night/discover"
					className="w-40 h-10 rounded-xl bg-black/50 border border-slate-500 flex justify-center items-center text-white text-sm hover:bg-black/90 transition-colors "
				>
					Découvrir
				</Link>
			</div>
		</div>
	);
}
