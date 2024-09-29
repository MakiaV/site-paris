import EventCard from "@/app/components/EventCard";
import eventsBan from "@/app/images/events-ban.png";
import { eventsData } from "@/data/events";
import Image from "next/image";

const EventsNight = () => {
	return (
		<div className="text-white pb-4">
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
			<div className="grid grid-cols-3 gap-4 px-24 my-12 2xl:px-48">
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
						theme="dark"
					/>
				))}
			</div>
		</div>
	);
};

export default EventsNight;
