"use client";
import ReactPlayer from "react-player";

const MyVideoPlayer = () => {
	return (
		<div className="">
			<ReactPlayer
				// url="https://www.youtube.com/watch?v=REDVbTQxMXo"
				url="https://www.youtube.com/watch?v=wbVdswcyl6I"
				// url="https://vimeo.com/510729330"
				controls={false}
				muted
				playing
				loop
				width="100%"
				height="56vw"
				className="pointer-events-none"
			/>

			{/* <div className="absolute  inset-0 bg-black/20 border border-green-400"></div> */}
		</div>
	);
};

export default MyVideoPlayer;
