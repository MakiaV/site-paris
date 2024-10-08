import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Paris la belle",
	description: "Découvrez la magnifique ville lumière et le l'amour",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={montserrat.className}>
				<div className="fixed top-0 w-full z-50">
					<Navbar />
				</div>

				<div className="min-h-screen">{children}</div>

				<Footer />
			</body>
		</html>
	);
}
