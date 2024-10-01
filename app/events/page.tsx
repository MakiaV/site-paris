import eventsBan from "@/app/images/events-ban.png";
import { eventsData } from "@/data/events";
import Image from "next/image";
import EventCard from "../components/EventCard";

const Events = () => {
	return (
		<div className="">
			<div className="relative h-[500px]">
				<Image
					src={eventsBan}
					alt="events banner"
					fill
					className="object-cover"
				/>
				<h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
					Événements
				</h1>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-12 lg:px-24 my-12 2xl:px-48">
				{eventsData.map((event) => (
					<EventCard
						key={event.id}
						title={event.title}
						description={event.description}
						link={event.link}
						date={event.date}
						image={event.image}
						location={event.location}
						genre={event.genre}
						theme="light"
					/>
				))}
			</div>
		</div>
	);
};

export default Events;
