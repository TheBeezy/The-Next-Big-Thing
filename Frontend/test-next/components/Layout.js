import Header from './Header'
import Footer from './Footer'

// CSS Styling
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
}
const h1Style = {
    fontSize: '20pt',
    fontFamily: 'Arial',
	textAlign: 'center'
}

const Layout = (props) => (
    <div style = {layoutStyle}>
        <div style = {h1Style}><h1> Bookmill </h1></div>
        <Header/>
        {props.children}
		<Footer/>
    </div>
)

export default Layout
