import Layout from '../components/Layout.js'
import Review from '../components/Review.js'

//Const to blend in with others
const reviewpage = () => (
	<Layout>
        <head>
            <title>Schedule</title>
        </head>
		<div>
			<h1>Make a Review</h1>
			<Review/>		
		</div>
	</Layout>
);


export default reviewpage;