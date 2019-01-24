import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const FetchExample = (props) => (
  <Layout>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

FetchExample.getInitialProps = async function() {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=Batman}`)
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default FetchExample