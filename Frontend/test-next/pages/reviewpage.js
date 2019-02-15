import Layout from '../components/Layout'
import Review from '../components/Review.js'

//Using Const to make it blend it with others
const reviewpage = () => (
	<Layout>
        <head>
            <title>Reviews</title>
            <div>
                <h1>Make A Review</h1><Review/>
            </div>
        </head>
	</Layout>
);

export default reviewpage;
