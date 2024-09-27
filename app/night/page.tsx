import HomeContent from "../components/HomeContent";
import MyVideoPlayer from "../components/MyVideoPlayer";

const ParisNight = () => {
	return (
		<div className="w-full">
			<MyVideoPlayer />

			<HomeContent theme="dark" />
		</div>
	);
};

export default ParisNight;
