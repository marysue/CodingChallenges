/*
    Write a ContactForm component to display the following fields:
    - An input with the name attribute set to "firstName"
    - An input with the name attribute set to "age"
    - If the users age is greater than or equal to 14, it should also display an input for
      the email address, with the name attribute set to "email".
    - If the user's age is less than 14, the email input should not be rendered.

The values for the fields should be stored in the component state, under the "firstName",
"email", and "age" keys.
*/

//React is loaded and is available as React and ReactDOM
//imports should NOT be used

class ContactForm extends React.Component {
    //Fill in the appropriate state properties
    state = {
        firstName : '',
        age:  0,
        email: ''
    }

    handleAgeChange = (e) => {
        this.setState({ ...this.state, age: e.target.value});
    }

    handleNameChange = (e) => {
        this.setState({ ...this.state, firstName: e.target.value});
    }

    handleEmailChange = (e) => {
        this.setState({...this.state, email: e.target.value})
    }

    render() {
        return <div>
            {/* render contact form input fields here */ }
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleNameChange}
                />
                <input
                    type="number"
                    name="age"
                    value={this.state.ageValue}
                    onChange={this.handleAgeChange}
                />
                { this.state.age >= 14 ? <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                /> : null }
            </form>
        </div>
    }
}
