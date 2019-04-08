import Link from 'next/link'
  
const SellerListing = (props) => {
  const options = props.sellerListings.map(r => (
    <li key={r.description}>
        <Link as={`/tb/${r.isbn}`}href={`/textbook?id=${r.name}`}>
            <a>Seller: {r.name}, Condition:  {r.description}, Price: {r.price}</a>
        </Link>
    </li>
  ))
  return <ul>{options}</ul>
}

export default SellerListing 
