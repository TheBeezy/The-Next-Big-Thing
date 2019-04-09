import Link from 'next/link'

// CSS Styling
const linkStyle = {
    fontFamily: 'Arial',
    fontSize: '20pt',
    marginRight: '3%',
    marginLeft: '3%',
}
const headerStyle = {
	textAlign: 'center',
    marginLeft: '5%',
    marginRight: '5%',
}

const Header = () => (
    <div style={headerStyle}>
        <Link href="/index">
            <a style={linkStyle}>
                Home
            </a>
        </Link>
        <Link href="/userpage">
            <a style={linkStyle}>
                Profile 
            </a>
        </Link>
        <Link href="/signin">
            <a style={linkStyle}>
                Sign In
            </a>
        </Link>
    </div>
)

export default Header
