import Layout from '../components/Layout'
import Link from 'next/link'

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js!'},
        { id: 'learn-nextjs', title: 'Learn Next.js!'}
    ]
}

const PostLink = ({ post }) => (
    <li>
        <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
            h1, a {
                font-family: "Arial";
            }

            ul {
                padding: 0;
            }

            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
)

export default () => (
    <Layout>
        <h1>Whatever</h1>
        <ul>
            {getPosts().map((post) => (
                <li key={post.id}>
                    <PostLink key={post.id} post = {post}/>
                </li>
            ))}
        </ul>
        <style jsx>{`
            h1, a {
                font-family: "Arial";
            }

            ul {
                padding: 0;
            }

            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </Layout>
)
