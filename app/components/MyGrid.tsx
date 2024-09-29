import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";

import img2 from "@/app/images/2.jpg";
import img3 from "@/app/images/3.jpg";
import img1 from "@/app/images/gastro.jpg";

import Image, { StaticImageData } from "next/image";

const MyGrid = ({ theme }: { theme: "light" | "dark" }) => {
	return (
		<BentoGrid className="w-full" theme={theme}>
			{items.map((item, i) => (
				<Link
					key={i}
					href={theme === "light" ? item.link : "/night" + item.link}
				>
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						theme={theme}
					/>
				</Link>
			))}
		</BentoGrid>
	);
};
const Skeleton = ({ src }: { src: StaticImageData }) => (
	<div className="relative ">
		<Image
			src={src}
			alt="skeleton"
			className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-gradient-to-br from-neutral-200 "
		/>
		<div className="absolute w-full h-full  top-0 left-0 bg-black/50 rounded-xl"></div>
	</div>
);
const items = [
	{
		title: "Gastronomie",
		description:
			"Découvrez les dernières tendances de la street food parisienne",
		header: <Skeleton src={img1} />,

		link: "/eat-and-drink",
	},
	{
		title: "Events",
		description: "Retrouvez les indispensables",
		header: <Skeleton src={img2} />,

		link: "/events/2",
	},
	{
		title: "Plus de découvertes à Paris.",
		description: "The place to Be",
		header: <Skeleton src={img3} />,

		link: "/discover",
	},
];

export default MyGrid;
