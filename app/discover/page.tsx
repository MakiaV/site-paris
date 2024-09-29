import discoverBanner from "@/app/images/5.jpg";
import { incontournables } from "@/data/incontournables";
import Image from "next/image";
import MustHaveCard from "../components/MustHaveCard";

const Discover = () => {
	return (
		<div className="">
			<div className="relative h-[70vh]">
				<Image
					src={discoverBanner}
					alt="discover banner"
					fill
					className="object-cover object-bottom"
				/>
				<div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
				<div className="absolute  text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
					<h1 className="  text-6xl font-bold">
						Votre guide pour découvrir la magie de Paris
					</h1>
					<h2 className="text-xl font-bold my-8 2xl:my-12">
						De l&apos;élégance des monuments historiques aux rues
						pittoresques, plongez dans le cœur vibrant de la
						capitale française
					</h2>
					<button className="bg-sky-900 px-4 py-2 mt-4 rounded-2xl text-white font-bold hover:bg-sky-800 mr-4">
						Planifiez votre visite
					</button>
					<button className="bg-sky-900 px-4 py-2 mt-4 rounded-2xl text-white font-bold hover:bg-sky-800">
						Téléchargez votre guide gratuit
					</button>
				</div>
			</div>
			<div className="px-24 2xl:px-48 my-8">
				<h2 className="text-3xl font-bold">
					Les incontournables de Paris
				</h2>
				<div className="grid grid-cols-3 gap-4 my-12">
					{incontournables.map((incontournable) => (
						<MustHaveCard
							key={incontournable.id}
							{...incontournable}
							theme="light"
						/>
					))}
				</div>
				<button className="bg-sky-900 px-4 py-2 mt-4 rounded-2xl text-white font-bold hover:bg-sky-800">
					Voir plus d&apos;incontournables
				</button>
			</div>
		</div>
	);
};

export default Discover;
