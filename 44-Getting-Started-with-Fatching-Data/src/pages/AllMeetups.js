import { useState } from "react";
import { MeetupList } from "../components/MeetupItem/MeetupList";

export const AllMeetupsPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);
	fetch(
		"https://react-getting-started-ae947-default-rtdb.firebaseio.com/meetups.json"
	)
		.then(() => {
			return response.json();
		})
		.then((data) => {
			setIsLoading(false);
			setLoadedMeetups(data);
		});
	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}
	return (
		<section>
			<h1>All Meetup Page</h1>
			<MeetupList meetups={loadedMeetups} />
		</section>
	);
};
