import Layout from '../components/Layout'
import {withRouter} from 'next/router'
import data from '../FireBaseConfig.json'
import TextbookRater from '../components/TextbookRater'
import Textbook from '../components/Textbook'


const textbook = withRouter(props => (
    <Layout>
        <Textbook id={props.router.query.id}/>
		<p>Selling this book?<a href ='/sellerPortal'>Add a Listing!</a></p>
        <h1>{props.router.query.id}</h1>
		<p>Selling this book?<a href="javascript:window.open('/sellerPortal','mypopuptitle','width=600,height=400')">Add a Listing!</a></p>
		<br/>
		<p>Used this book? Leave a rating</p>
		<TextbookRater/>
		<br/>
		<p>Looking for this book?  See who's selling below!</p>
    </Layout>
))
export default textbook