"use client";
import ReactPlayer from "react-player";
import { MyTypewriterEffect } from "./parisNight/MyTypeWriter";

const MyVideoPlayer = () => {
	return (
		<div className="h-[100vh] w-[100vw] relative">
			<ReactPlayer
				// url="https://www.youtube.com/watch?v=REDVbTQxMXo"
				url="https://www.youtube.com/watch?v=wbVdswcyl6I"
				// url="https://vimeo.com/510729330"
				controls={false}
				muted
				playing
				loop
				width="100vw"
				// height="100vh"
				height="56vw"
				className="pointer-events-none top-0 left-0 absolute p-0"
			/>
			<MyTypewriterEffect />
		</div>
	);
};

export default MyVideoPlayer;
