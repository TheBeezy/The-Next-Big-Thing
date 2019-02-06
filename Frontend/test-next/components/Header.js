import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/index">
            <a style={linkStyle}>
                Home
            </a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>
                About
            </a>
        </Link>
        <Link href="/fetch-example">
            <a style={linkStyle}>
                Fetch Example
            </a>
        </Link>
        <Link href="/style-example">
            <a style={linkStyle}>
                Style Example
            </a>
        </Link>
	<Link href="/austin">
            <a style={linkStyle}>
                Austin Example
            </a>
        </Link>
	<Link href="/server">
            <a style={linkStyle}>
                Schedule a place to meet
            </a>
        </Link>
    </div>
)

export default Header
