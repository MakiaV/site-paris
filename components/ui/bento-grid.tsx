import { cn } from "@/lib/utils";

export const BentoGrid = ({
	className,
	children,
	theme,
}: {
	className?: string;
	children?: React.ReactNode;
	theme?: "light" | "dark";
}) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-y-8 2xl:grid-cols-3 gap-x-8 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	theme,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	theme?: "light" | "dark";
}) => {
	return (
		<div
			className={
				theme === "light"
					? cn(
							"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-neutral-200 justify-between flex flex-col space-y-4 relative",
							className
					  )
					: cn(
							"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4  bg-sky-800/40  justify-between flex flex-col space-y-4 relative",
							className
					  )
			}
		>
			{header}
			<div className="group-hover/bento:scale-110 ease-in-out transition duration-200 absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">
				<div className="font-bold text-2xl mb-2 2xl:text-4xl">
					{title}
				</div>
				<div className="text-lg 2xl:text-2xl">{description}</div>
			</div>
		</div>
	);
};
