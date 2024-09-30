"use client";
import ReactPlayer from "react-player";
import { MyTypewriterEffect } from "./parisNight/MyTypeWriter";

const MyVideoPlayer = () => {
	return (
		<div className="relative h-[300px] lg:h-[100vh] w-[100vw]">
			<ReactPlayer
				url="https://www.youtube.com/watch?v=wbVdswcyl6I"
				controls={false}
				muted
				playing
				loop
				width="100%"
				height="100%"
				className="absolute top-0 left-0 pointer-events-none"
			/>
			{/* Typewriter effect over the video */}
			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
				<MyTypewriterEffect />
			</div>
		</div>
	);
};

export default MyVideoPlayer;
