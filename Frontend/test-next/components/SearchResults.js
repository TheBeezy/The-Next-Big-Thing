import Link from 'next/link'

const SearchResults = (props) => {
  const options = props.results.map(r => (
    <li key={r.isbn}>
        <Link as={`/tb/${r.isbn}`}href={`/textbook?id=${r.isbn}`}>
            <a>{r.name}</a>
        </Link>
    </li>
  ))
  return <ul>{options}</ul>
}

export default SearchResults