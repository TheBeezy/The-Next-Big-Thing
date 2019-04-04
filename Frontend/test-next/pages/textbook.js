import Layout from '../components/Layout'
import {withRouter} from 'next/router'
import TextbookRater from '../components/TextbookRater'
import Textbook from '../components/Textbook'
import AddListing from '../components/AddListing'
import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp(data)
}

const textbook = withRouter(props => (
    <Layout>
        <Textbook id={props.router.query.id} db={firebase.firestore()}/>
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