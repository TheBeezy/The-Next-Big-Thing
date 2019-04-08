import Link from 'next/link'

const SearchResults = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
        <Link as={`/tb/${r.isbn}`}href={`/textbook?id=${r.name}`}>
            <a>{r.name}</a>
        </Link>
    </li>
  ))
  return <ul>{options}</ul>
}

export default SearchResults
