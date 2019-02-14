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
	    <Link href="/MeetingSchedule">
            <a style={linkStyle}>
                Schedule a Meeting
            </a>
        </Link>
        <Link href="/signin">
            <a style={linkStyle}>
                Sign In / Create Account
            </a>
        </Link>
		<Link href="/userpage">
			<a style={linkStyle}>
				Profile 
			</a>
		</Link>
    </div>
)

export default Header
