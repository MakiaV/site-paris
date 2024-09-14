import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
			>
				<div className="fixed top-0 w-full">
					<Navbar />
				</div>
				<div className="min-h-screen">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
