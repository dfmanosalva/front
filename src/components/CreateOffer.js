import React, { Component } from "react";
//import useForm from "./customHooks";

class CreateOffer extends Component {

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
        [name]: value
    });
  }
  
  handleSubmit = (event) => {
    fetch("/offers", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
    }).then(res => {
        return res.json();
    }).then(res => {
        console.log("Res", res);
        this.props.action();
    });
  
    event.preventDefault();
  }

render()
{


    return (
        <div>
            <h1>Add a new offer</h1>
            <form onSubmit={this.handleSubmit}>
                <label for="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                />
                <label for="company"> Company:</label>
                <input
                    id="company"
                    type="text"
                    name="company"
                    onChange={this.handleChange}
                />
                <label for="salary">Salary:</label>
                <input
                    id="salary"
                    type="text"
                    name="salary"
                    onChange={this.handleChange}
                />
                <label for="city">City:</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    onChange={this.handleChange}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
}
export default CreateOffer;
