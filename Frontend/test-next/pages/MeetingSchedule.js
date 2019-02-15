import Layout from '../components/Layout.js'
import Choices from '../components/Choices'

//Create a const for a cleaner look
const MeetingSchedule = () => (
	<Layout>
        <head>
            <title>Schedule</title>
        </head>
		<div>
			<h1>Schedule a time and place too meet.</h1>
			<Choices/>		
		</div>
	</Layout>
);


export default MeetingSchedule;
