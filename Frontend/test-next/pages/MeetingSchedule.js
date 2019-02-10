import Layout from '../components/Layout.js'
import Choices from '../components/Choices'

//Create a const for a cleaner look
const MeetingSchedule = () => (
	<Layout>
		<div>
			<h1>Schedule a time and place too meet.</h1>
			//Uses the Choices class to display the drop box menu of the meeting places
			<Choices/>		
		</div>
	</Layout>
);


export default MeetingSchedule;
