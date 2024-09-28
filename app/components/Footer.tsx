import facebook from "@/app/images/facebook.svg";
import heart from "@/app/images/heart.png";
import instagram from "@/app/images/instagram.svg";
import logo from "@/app/images/paris-1.png";
import x from "@/app/images/x.svg";

import Image from "next/image";

const Footer = () => {
	return (
		<div className="flex items-center justify-between 2xl:px-48 px-24 py-12 bg-sky-900">
			<div className="flex text-white font-bold bg-sky-700 rounded-xl px-4 py-2  items-center justify-center">
				<span className="-mr-2">P</span>

				<Image src={logo} alt="logo" width={40} height={40} />

				<span className="-ml-2">ARIS</span>

				<span className="ml-4">je t'aime</span>
			</div>
			<div className="text-white font-bold flex gap-x-2">
				<p>© 2024 Made With</p>
				<Image src={heart} alt="heart" width={20} height={20} />
				<p>
					by <span className="text-yellow-600">MakiaV</span>. Tous
					droits réservés.
				</p>
			</div>
			<div className="flex gap-x-4">
				<Image src={facebook} alt="facebook" width={24} height={24} />
				<Image src={instagram} alt="instagram" width={24} height={24} />
				<Image src={x} alt="x" width={24} height={24} />
			</div>
		</div>
	);
};

export default Footer;
