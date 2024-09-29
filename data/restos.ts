import img1 from "@/app/images/holybelly.jpg";
import img2 from "@/app/images/season.jpg";
import img3 from "@/app/images/recyclerie.jpg";
import { StaticImageData } from "next/image";

type Resto = {
	id: number;
	name: string;
	address: string;
	title: string;
	description: string;

	src: StaticImageData;
}[];

export const restos: Resto = [
	{
		id: 1,
		name: "image 1",
		src: img1,
		title: "Holybelly 5",
		description:
			"Situé dans le 10ᵉ arrondissement, Holybelly est un temple du brunch à Paris. Avec ses pancakes moelleux, ses œufs pochés et ses assiettes généreuses, ce lieu est une référence pour un brunch réconfortant. Le café y est également excellent, avec une sélection de torréfacteurs parisiens",
		address: "5 Rue Lucien Sampaix, 75010 Paris",
	},
	{
		id: 2,
		name: "image 2",
		src: img2,
		title: "Season",
		description:
			"Ce restaurant branché dans le Marais propose des brunchs sains et gourmands. Avocado toast, pancakes aux fruits frais, açai bowls et jus détox sont au menu, le tout dans un cadre lumineux et épuré. C'est l’endroit parfait pour un brunch healthy et délicieux",
		address: "1 Rue Charles-François Dupuis, 75003 Paris",
	},
	{
		id: 3,
		name: "image 3",
		src: img3,
		title: "La Recyclerie",
		description:
			"Nichée au sein d’une ancienne gare, La Recyclerie est un lieu alternatif et éco-responsable où bruncher devient une expérience unique. Le buffet à volonté met à l'honneur des produits locaux et bio, dans un cadre verdoyant et bohème. Un lieu atypique pour un brunch à la fois généreux et engagé",
		address: "83 Boulevard Ornano, 75018 Paris",
	},
];
