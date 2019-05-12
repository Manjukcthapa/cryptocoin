import React from "react"
import './Coin.css';

class BitcoinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname: "",
            phonenumber: "",
            email: "",
            password: ""
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="header3">
            <div className="formheader">
            <h1>Open Your Free Account Today!</h1>
        </div>
            <form>
                <div className="Form">
                  
                    <input className="formlist"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />

                    <input className="formlist"
                        type="text"
                        name="lastname"
                        placeholder="LastName"
                        value={this.state.lastname}
                        onChange={this.handleInputChange}
                    />

                    <input className="formlist"
                        type="number"
                        name="phonenuber"
                        placeholder="Phone Number"
                        value={this.state.phonenumber}
                        onChange={this.handleInputChange}
                    />

                    <input className="formlist"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />

                    <input className="formlist"
                        type="text"
                        name="password"
                        placeholder="Create Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <br></br>
                    <button className="formbotton">Create Free Account</button>
                </div>
            </form>
            </div>

        )
    }
}


export default BitcoinForm