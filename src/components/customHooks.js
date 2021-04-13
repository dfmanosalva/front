import { useState } from "react";

const useSignUpForm = (schema) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
        [name]: value
    });
  }
  
  const handleSubmit = (event) => {
      console.log("Submit")
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

  return { handleSubmit, handleChange };
};

export default useSignUpForm;