const NightLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <div className="min-h-screen bg-[#18181B]">{children}</div>;
};

export default NightLayout;
