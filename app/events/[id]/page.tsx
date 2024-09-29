import { eventsData } from "@/data/events";
import Image from "next/image";

const Event = ({ params }: { params: { id: string } }) => {
	const event = eventsData.find((event) => event.id === parseInt(params.id));
	return (
		<div className="px-24 pt-24 2xl:px-80">
			<h1 className="text-4xl font-bold text-center my-4">
				{event?.title}
			</h1>
			{event?.image && (
				<div className="relative h-[70vh]">
					<Image
						src={event.image}
						alt={event.title}
						fill
						className="object-cover"
					/>
				</div>
			)}
			<p className="text-lg my-4 text-justify">{event?.description}</p>

			<div className="mb-8">
				<p className="text-lg font-bold">{event?.date}</p>
				<p className="text-lg font-bold">{event?.location}</p>
				<p className="text-sm">Paris, France</p>
			</div>
		</div>
	);
};

export default Event;
