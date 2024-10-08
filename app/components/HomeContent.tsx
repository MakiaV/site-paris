import expoImg from "@/app/images/expo.jpg";
import expoNightImg from "@/app/images/expoNight.jpg";
import Image from "next/image";
import Link from "next/link";
import MyGrid from "./MyGrid";
import SubCarousel from "./SubCarousel";

const HomeContent = ({ theme }: { theme: "light" | "dark" }) => {
	return (
		<div
			className={
				theme === "light"
					? "px-24 2xl:px-48 py-12"
					: "px-24 2xl:px-48 py-12"
			}
		>
			<div
				className={
					theme === "light"
						? "grid grid-cols-1 lg:grid-cols-2   mb-12  bg-sky-100/90 rounded-lg"
						: "grid grid-cols-1 lg:grid-cols-2   mb-12  bg-sky-950/50 rounded-lg text-white"
				}
			>
				<div className="relative w-full h-[400px] lg:h-full ">
					<Image
						src={theme === "light" ? expoImg : expoNightImg}
						alt="expo"
						fill
						className="object-cover rounded-l-lg"
					/>
				</div>
				<div className="p-8">
					<h1 className="text-2xl  font-bold">
						Pour les amateurs de culture à Paris cet automne
					</h1>
					<p className="mb-8 text-justify">
						L&#39;un des prochains grands événements culturels à
						Paris est l&#39;exposition &#39;&#39;Family
						Ties&#39;&#39; de la photographe Tina Barney, qui débute
						le 28 septembre 2024 au Jeu de Paume. Cette exposition
						explore les relations familiales à travers une série de
						photographies esthétiques et pleines de symbolisme. Elle
						sera accessible jusqu&#39;au 19 janvier 2025, et promet
						d&#39;attirer les amateurs d&#39;art contemporain et de
						photographie​.
					</p>

					<Link
						href="/events/1"
						className="z-40 text-white  bg-sky-950 rounded-md font-bold px-4 py-2 hover:bg-sky-700 transition-colors"
					>
						En savoir plus
					</Link>
				</div>
			</div>
			<MyGrid theme={theme} />
			<SubCarousel theme={theme} />
		</div>
	);
};

export default HomeContent;
