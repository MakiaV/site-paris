import restoBanner from "@/app/images/resto.png";
import { eatDrinks } from "@/data/eatAndDrink";
import Image from "next/image";
import CarouselResto from "../components/CarouselResto";
import EatDrinkCard from "../components/EatDrinkCard";
const EatAndDrink = () => {
	return (
		<div className="">
			<div className="relative h-[100vh]">
				<Image
					src={restoBanner}
					alt="resto banner"
					fill
					className="object-cover object-bottom"
				/>
				<div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
				<div className="absolute  text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
					<h1 className="  text-6xl font-bold">
						Explorez les saveurs de Paris, du bistrot de quartier au
						restaurant étoilé
					</h1>
					<h2 className="text-xl font-bold my-8 2xl:my-12">
						Découvrez les meilleures adresses pour déguster la
						cuisine parisienne et profiter des bars animés de la
						ville
					</h2>
					<button className="bg-sky-900 px-4 py-2 mt-4 rounded-2xl text-white font-bold hover:bg-sky-800 mr-4">
						Réservez une table
					</button>
				</div>
			</div>
			<div className="px-24 2xl:px-48 my-8">
				<p className=" font-bold text-justify">
					Découvrez les dernières tendances de la street food
					parisienne ainsi que les restaurants gastronomiques
					incontournables. Trouvez des adresses phares, assistez à des
					événements culinaires et explorez des lieux idéaux pour
					partager un repas convivial en famille ou entre amis. Que
					vous ayez envie d’une pizza, d’un burger, ou d’une cantine
					healthy, laissez-vous inspirer et dégustez les trésors
					cachés de la Ville Lumière.
				</p>
				<div className="grid grid-cols-3 gap-4 my-12">
					{eatDrinks.map((eatDrink) => (
						<EatDrinkCard
							key={eatDrink.id}
							{...eatDrink}
							theme="light"
						/>
					))}
				</div>
				<div className="pb-24">
					<h2 className="text-3xl font-bold">
						Les incontournables restos
					</h2>

					<CarouselResto theme="light" />
				</div>
			</div>
		</div>
	);
};

export default EatAndDrink;
