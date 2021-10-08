import React, { Component } from 'react'
import './signUpPage.css'
class SignUpPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            email: '',
            pass: '',
            confPass: '',
            errorfname: '',
            errorlname: '',
            errorEmail: '',
            errorPass: '',
            errorConfPass: '',
            success: '',
            errorSuccess: 'invalid'
        }
    }



    onChangeFname = (event) => {
        const fname = event.target.value;
        const pattern = "^[A-Za-z]\\w{3,29}$"
        if (fname.match(pattern)) {
            this.setState({
                fname: fname,
                errorSuccess: '',
                errorfname: ""
            })
            console.log(this.state.fname)
        }
        else {
            this.setState({
                fname: fname,
                errorSuccess: 'Invalid',
                errorfname: "Invalid"
            })
        }
    }


    onChangeLname = (event) => {
        const lname = event.target.value;
        const pattern = "^[A-Za-z]\\w{2,29}$"
        if (lname.match(pattern)) {
            this.setState({
                lname: lname,
                errorSuccess: '',
                errorlname: ""
            })
            console.log(this.state.lname)
        }
        else {
            this.setState({
                lname: lname,
                errorSuccess: 'Invalid',
                errorlname: 'Invalid'

            })
        }
    }


    onChangeEmail = (event) => {
        const email = event.target.value;
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email.match(pattern)) {
            this.setState({
                email: event.target.value,
                errorSuccess: '',
                errorEmail: ''
            })
            console.log(this.state.email)
        }
        else {
            this.setState({
                email: event.target.value,
                errorSuccess: 'Invalid',
                errorEmail: "Invalid"
            })
        }
    }


    onChangePass = (event) => {
        const pass = event.target.value;
        if (pass.length >= 8) {
            this.setState({
                pass: event.target.value,
                errorSuccess: '',
                errorPass: ''
            })
            console.log(this.state.pass)
        }
        else {
            this.setState({
                pass: event.target.value,
                errorSuccess: 'Invalid',
                errorPass: "Invalid"
            })
        }
    }


    onChangeCnfmPass = (event) => {
        const cnfmPass = event.target.value;
        console.log("inside cnfmpass");
        if (cnfmPass.length >= 8 && cnfmPass === this.state.pass) {
            this.setState({
                cnfmPass: event.target.value,
                errorSuccess: '',
                errorConfPass: ''
            })
        }
        else {
            this.setState({
                cnfmPass: event.target.value,
                errorSuccess: 'Invalid',
                errorConfPass: "Invalid"
            })
        }
        console.log(this.state.cnfmPass)
    }

    signUpPageSubmit = (event) => {
        event.preventDefault();
        if (!this.state.errorfname && !this.state.errorlname && !this.state.errorEmail && !this.state.errorPass && !this.state.errorConfPass && this.state.fname && this.state.lname && this.state.email && this.state.pass && this.state.cnfmPass) {
            this.setState({
                success: 'valid'
            })
            console.log("success")
        }
        else {
            this.setState({
                success: ''
            })
            console.log("Invalid")

        }
    }


    render() {
        return (
            <div className="formDiv">
                <div>
                    <form onSubmit={this.signUpPageSubmit}>
                        <label>First Name :</label>
                        <input type="text" placeholder="first name " onChange={this.onChangeFname} value={this.state.fname} />
                        {this.state.errorfname && <div className="error">Invalid first name</div>}

                        <label>Last Name :</label>
                        <input type="text" placeholder="Last name " onChange={this.onChangeLname} value={this.state.lname} />
                        {this.state.errorlname && <div className="error">Invalid last name</div>}

                        <label>Email :</label>
                        <input type="text" placeholder="Email" onChange={this.onChangeEmail} value={this.state.email} />
                        {this.state.errorEmail && <div className="error">Invalid email</div>}

                        <label>Password :</label>
                        <input type="password" placeholder="Password" onChange={this.onChangePass} value={this.state.pass} />
                        {this.state.errorPass && <div className="error">Invalid Password</div>}

                        <label>Confirm Password :</label>
                        <input type="password" placeholder="Confirm Password" onChange={this.onChangeCnfmPass} value={this.state.cnfmfPass} />
                        {this.state.errorConfPass && <div className="error">Password not match</div>}

                        <button type="submit">Sign Up</button>
                    </form>
                    {this.state.success && <h1>Successful SignUp</h1>}
                </div>
            </div>
        )
    }

}
export default SignUpPage
