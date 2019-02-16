class Review extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        //Function to output the result of the input from the form
        document.getElementById("result").innerHTML = 
        "Name:&nbsp;"+document.getElementById('name').value + 
        "<p/>Rating:&nbsp;" + document.getElementById('grade').value + 
        "<p/>Comments:<p/>" + document.getElementById('coment').value;
    }



    render() {
        return (
            //Using form tag for user input and to create a submit button
            <div>
            <form action="PayslipServlet" method="get">
            <p>Name:<input type="text" name="name" id="name"></input></p>
            <p>Ratin(A-F):<select onChange name="grade" id="grade">
                <option value = "A">A</option>
				<option value = "B">B</option>
				<option value = "C">C</option>
                <option value = "D">D</option>
                <option value = "E">E</option>
                <option value = "F">F</option>
            </select>       
            </p>
            <p>Comment: <textarea name="coment" id ="coment"></textarea></p>
            <p><input type="button" value="Submit" onClick={this.handleSubmit}></input></p>

            <span id="result"></span>

            </form>
            </div>
        )
    }
}

export default Review;
