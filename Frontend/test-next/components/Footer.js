import Link from 'next/link'

// CSS Styling
const linkStyle = {
    fontFamily: 'Verdana',
	textAlign: 'right'
}
const headerStyle = {
}

const Footer = () => (
    <div style={linkStyle}>
	    <Link href="/about">
            <a>About</a>
	    </Link>
    </div>
)

export default Footer
