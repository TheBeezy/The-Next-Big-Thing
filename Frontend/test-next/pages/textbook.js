import Layout from '../components/Layout'
import {withRouter} from 'next/router'
import TextbookRater from '../components/TextbookRater'
import Textbook from '../components/Textbook'


const textbook = withRouter(props => (
    <Layout>
        <Textbook id={props.router.query.id}/>
		<p>Selling this book?<a href="javascript:window.open('/sellerPortal','mypopuptitle','width=600,height=400')">Add a Listing!</a></p>
		<br/>
		<p>Used this book? Leave a rating</p>
		<TextbookRater/>
		<br/>
		<p>Looking for this book?  See who's selling below!</p>
    </Layout>
))
export default textbook