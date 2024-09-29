import img2 from "@/app/images/festival.jpg";
import img1 from "@/app/images/tina-barney.jpg";
import { StaticImageData } from "next/image";

type Event = {
	id: number;
	title: string;
	description: string;
	link: string;
	date: string;
	image: StaticImageData;
	location: string;
	genre: string;
}[];

export const eventsData: Event = [
	{
		id: 1,
		title: "Tina Barney : L’intimité familiale capturée au Jeu de Paume",
		description:
			"Tina Barney, célèbre photographe américaine, explore les relations familiales à travers son exposition intitulée Family Ties au Jeu de Paume à Paris. Son travail se distingue par des photographies en grand format qui capturent des scènes intimes et des moments ordinaires de la vie des familles bourgeoises américaines et européennes. L'exposition met en lumière la manière dont Barney parvient à saisir les dynamiques familiales, souvent complexes et nuancées, à travers des compositions minutieuses qui donnent une dimension théâtrale à des instants du quotidien. Les couleurs vibrantes et les détails riches présents dans ses photographies contribuent à créer des images à la fois réalistes et stylisées. Tina Barney a commencé à photographier sa propre famille dans les années 1970, en capturant des moments spontanés et non posés qui illustrent la proximité, mais aussi les tensions et les non-dits qui peuvent exister entre les membres d'une même famille. Ses œuvres sont à la frontière entre la photographie documentaire et la mise en scène, reflétant son intérêt pour la manière dont les interactions humaines se jouent dans des cadres domestiques. L'exposition Family Ties permet aux visiteurs de plonger dans cet univers de portraits familiaux où l'intime rencontre le social, en montrant des individus dans leur environnement naturel tout en évoquant des thématiques universelles comme l'héritage, l'identité et la tradition. Si tu veux approfondir, je peux t'aider à trouver plus de détails sur les dates, les œuvres exposées ou encore les thématiques spécifiques abordées dans cette exposition.",

		link: "/events/1",
		date: "September 28, 2024",
		image: img1,
		location: "1 Pl. de la Concorde",
		genre: "Exposition",
	},
	{
		id: 2,

		title: "Centre Pompidou : Entre performance, rétrospective et installations immersives",
		description:
			"Dans le cadre du Festival d'Automne, le Centre Pompidou met à l'honneur le cinéaste thaïlandais Apichatpong Weerasethakul avec un focus exceptionnel du 2 octobre 2024 au 6 janvier 2025. L'événement propose une plongée dans l'univers protéiforme de l’artiste, à travers une exposition, une rétrospective de ses films et une performance en réalité virtuelle. L'exposition intitulée Particules de nuit, visible au Pavillon Brancusi jusqu'au 31 décembre, présente une série d'une dizaine d'installations vidéo. Weerasethakul y transforme l'espace en un cadre nocturne, où s'entrelacent des souvenirs personnels et des références architecturales. Une des œuvres phares, Solarium, s'inspire d'un film d'horreur thaïlandais datant de 1981 et aborde des thèmes comme la cécité et la vision intérieure. L'artiste propose ainsi une réflexion poétique et sensorielle sur les liens entre la mémoire et les perceptions.",

		link: "/events/2",
		date: "Octobre 2, 2024",
		image: img2,
		location: "Centre Pompidou",
		genre: "Festival",
	},
];
