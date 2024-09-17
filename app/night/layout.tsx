import React from "react";
import NightNavbar from "../components/parisNight/NightNavbar";

const NightLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="bg-[#18181B] text-white -mt-32 -mx-24 ">
			<div className="fixed top-0 w-full">
				<NightNavbar />
			</div>
			<div className="px-24 pt-32 min-h-screen">{children}</div>
		</div>
	);
};

export default NightLayout;
