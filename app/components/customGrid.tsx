import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";

import img1 from "@/app/images/1.jpg";
import img2 from "@/app/images/2.jpg";
import img3 from "@/app/images/3.jpg";
import img4 from "@/app/images/4.jpg";
import img5 from "@/app/images/5.jpg";
import img6 from "@/app/images/6.jpg";
import img7 from "@/app/images/7.jpg";

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
	{
		title: "The Power of Communication",
		description:
			"Understand the impact of effective communication in our lives.",
		header: <Skeleton src={img4} />,

		link: "/todos",
	},
	{
		title: "The Pursuit of Knowledge",
		description: "Join the quest for understanding and enlightenment.",
		header: <Skeleton src={img5} />,

		link: "/events",
	},
	{
		title: "The Joy of Creation",
		description: "Experience the thrill of bringing ideas to life.",
		header: <Skeleton src={img6} />,

		link: "/accommodation",
	},
	{
		title: "The Spirit of Adventure",
		description: "Embark on exciting journeys and thrilling discoveries.",
		header: <Skeleton src={img7} />,

		link: "/eat-and-drink",
	},
];

export default MyGrid;
