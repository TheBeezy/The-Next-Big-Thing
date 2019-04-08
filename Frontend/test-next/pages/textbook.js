import Layout from '../components/Layout'
import {withRouter} from 'next/router'
import TextbookRater from '../components/TextbookRater'
import Textbook from '../components/Textbook'
import Seller from '../components/Seller'

const textbook = withRouter(props => (
    <Layout> 
        <Textbook id={props.router.query.id}/>
		<p>Used this book? Leave a rating</p>
		<TextbookRater/>
		<br/>
		<p>Looking for this book?  See who's selling below!</p>
		<Seller id={props.router.query.id}/>

    </Layout>
))
export default textbook
