import { eventsData } from "@/data/events";
import Image from "next/image";

const Event = ({ params }: { params: { id: string } }) => {
	const event = eventsData.find((event) => event.id === parseInt(params.id));

	if (!event) {
		return (
			<div className="text-center py-24">
				<h1 className="text-4xl font-bold">Event not found</h1>
				<p className="text-lg">
					L&apos;event que vous cherchez n&apos;existe pas
				</p>
			</div>
		);
	}

	return (
		<div className="px-4 md:px-12 lg:px-24 pt-24 2xl:px-80">
			<h1 className="text-4xl font-bold text-center my-4">
				{event.title}
			</h1>
			{event.image && (
				<div className="relative h-[70vh]">
					<Image
						src={event.image}
						alt={event.title}
						fill
						className="object-cover"
					/>
				</div>
			)}
			<p className="text-lg my-4 text-justify">{event.description}</p>

			<div className="mb-8">
				<p className="text-lg font-bold">{event.date}</p>
				<p className="text-lg font-bold">{event.location}</p>
				<p className="text-sm">Paris, France</p>
			</div>
		</div>
	);
};

export default Event;
