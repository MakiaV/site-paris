import img1 from "@/app/images/louvreB.jpg";
import img2 from "@/app/images/notre-dame.jpg";
import img4 from "@/app/images/parc-des-princes.jpg";
import img3 from "@/app/images/tour-eiffel.jpg";
import { StaticImageData } from "next/image";

type Incontournable = {
	id: number;
	title: string;
	description: string;

	image: StaticImageData;
}[];

export const incontournables: Incontournable = [
	{
		id: 1,
		title: "Louvre",
		description:
			"Le plus grand musée du monde avec des chefs-d'œuvre comme la Joconde",
		image: img1,
	},
	{
		id: 2,
		title: "Notre-Dame",
		description: "Une cathédrale emblématique de l’architecture gothique",
		image: img2,
	},
	{
		id: 3,
		title: "Tour Eiffel",
		description:
			"Le symbole mondial de Paris, un incontournable pour votre première visite",
		image: img3,
	},
	{
		id: 4,
		title: "Parc des Princes",
		description:
			"Stade emblématique et le terrain de jeu du Paris Saint-Germain (PSG)",
		image: img4,
	},
];
