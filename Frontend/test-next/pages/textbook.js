import Layout from '../components/Layout'
import {withRouter} from 'next/router'
import Textbook from '../components/Textbook'

const textbook = withRouter(props => (
    <Layout>
        <Textbook id={props.router.query.id}/>
		<p>Selling this book?<a href ='/sellerPortal'>Add a Listing!</a></p>
		<br/>
		<p>Looking for this book?  See who's selling below!</p>
    </Layout>
))
export default textbook