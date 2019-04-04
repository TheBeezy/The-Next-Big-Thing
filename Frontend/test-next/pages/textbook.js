import Layout from '../components/Layout'
import {withRouter} from 'next/router'
import TextbookRater from '../components/TextbookRater'
import Textbook from '../components/Textbook'
import Link from 'next/link'
import AddListing from '../components/AddListing'


const textbook = withRouter(props => (
    <Layout>
        <Textbook id={props.router.query.id}/>
		<p>Selling this book? </p>
		<AddListing listing={props.router.query.id}/>
		
		<br/>
		<p>Used this book? Leave a rating</p>
		<TextbookRater/>
		<br/>
		<p>Looking for this book?  See who's selling below!</p>
    </Layout>
))
export default textbook