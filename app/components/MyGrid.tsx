import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";

import img1 from "@/app/images/1.jpg";
import img2 from "@/app/images/2.jpg";
import img3 from "@/app/images/3.jpg";

import Image, { StaticImageData } from "next/image";

const MyGrid = ({ theme }: { theme: "light" | "dark" }) => {
	return (
		<BentoGrid className="w-full" theme={theme}>
			{items.map((item, i) => (
				<Link key={i} href={item.link} className="">
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						theme={theme}

						// className="border border-blue-500"

						// className={i === 3 || i === 6 ? "md:col-span-2" : ""}
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
		title: "The Dawn of Innovation",
		description:
			"Explore the birth of groundbreaking ideas and inventions.",
		header: <Skeleton src={img1} />,

		link: "/accommodation",
	},
	{
		title: "The Digital Revolution",
		description: "Dive into the transformative power of technology.",
		header: <Skeleton src={img2} />,

		link: "/eat-and-drink",
	},
	{
		title: "The Art of Design",
		description: "Discover the beauty of thoughtful and functional design.",
		header: <Skeleton src={img3} />,

		link: "/night",
	},
];

export default MyGrid;
