import img1 from "@/app/images/resto-africain.jpg";
import img2 from "@/app/images/brunch.jpg";

import img3 from "@/app/images/salon-the.jpg";
import { StaticImageData } from "next/image";

type EatDrink = {
	id: number;
	title: string;
	description: string;
	badges: string[];
	image: StaticImageData;
}[];

export const eatDrinks: EatDrink = [
	{
		id: 1,
		title: "Les 5 meilleurs restos africains de Paris. Pour un voyage culinaire haut en saveurs",
		description:
			"Dans une ambiance conviviale et colorée, vous pourrez déguster des plats typiques tout en profitant d'une expérience culinaire immersive qui célèbre la richesse et la diversité des cultures africaines",
		image: img1,
		badges: ["Food"],
	},
	{
		id: 2,
		title: "4 brunchs incontournables à tester absolument pendant votre séjour à Paris",
		description:
			"Ces adresses promettent de régaler vos papilles tout en offrant des ambiances variées pour un brunch à ne pas manquer à Paris.",
		image: img2,
		badges: ["Drink"],
	},
	{
		id: 3,
		title: "Voici les 10 salons de thé incontournables à Paris en 2024. Pour savourer une parenthèse de douceur",
		description:
			"Découvrez les 10 meilleurs salons de thé de Paris en 2024, des lieux d’exception où vous pourrez vous accorder un moment de douceur et de tranquillité. Que vous soyez amateur de thés raffinés, de pâtisseries délicates ou simplement en quête d’un cadre cosy, ces adresses parisiennes sont parfaites pour une pause gourmande et apaisante dans la capitale.",
		image: img3,
		badges: ["Food", "Drink"],
	},
];
