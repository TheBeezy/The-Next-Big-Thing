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
    </div>
)

export default Header