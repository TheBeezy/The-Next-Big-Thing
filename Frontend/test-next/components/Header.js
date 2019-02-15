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
	<Link href="/about">
            <a style={linkStyle}>
                About
            </a>
	</Link>
    </div>
)

export default Header
