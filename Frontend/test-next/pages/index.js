import Layout from '../components/Layout.js'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>My Site</h1>
        <u1>
            <PostLink id="Hello-Nextjs" title="Hello Next.js"/>
            <PostLink id="Learn-Nextjs" title="Learn Next.js"/>
            <PostLink id="Beep!" title="Beep!"/>
        </u1>
    </Layout>
)