class Review extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        document.getElementById("result").innerHTML = 
        "Name:&nbsp;"+document.getElementById('name').value + "<p/>Rating:&nbsp;" +
        document.getElementById('rate').value + "<p/>Comments:<p/>" +
        document.getElementById('coment').value;
    }



    render() {
        return (
            <div>
            <form action="PayslipServlet" method="get">
            <p>Name:<input type="text" name="name" id="name"></input></p>
            <p>Rating(A-F):<input type="text" name="rating" id="rate"></input></p>
            <p>Comment: <textarea name="coment" id ="coment"></textarea></p>
            <p><input type="button" value="Submit" onClick={this.handleSubmit}></input></p>

            <span id="result"></span>

            </form>
            </div>
        )
    }
}

export default Review;
