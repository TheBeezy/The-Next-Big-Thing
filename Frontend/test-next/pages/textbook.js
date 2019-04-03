import Layout from '../components/Layout'
import firebase from 'firebase'
import {withRouter} from 'next/router'
import data from '../FireBaseConfig.json'

if (!firebase.apps.length) {
    firebase.initializeApp(data);
}

const textbook = withRouter(props => (
    <Layout>
        <h1>{props.router.query.id}</h1>
		<p>Selling this book?<a href="javascript:window.open('/sellerPortal','mypopuptitle','width=600,height=400')">Add a Listing!</a></p>
		<br/>
		<p>Looking for this book?  See who's selling below!</p>
    </Layout>
))
export default textbook