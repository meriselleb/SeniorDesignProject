import React from 'react'
import {Link} from 'react-router-dom'


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.onSignup = this.onSignup.bind(this);
    }

    onSignup(e) {
        fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.name.value,
                email: this.email.value,
                password: this.password.value,
            })
        }).then(res => {
            console.log(res)
        })
    }

    render() {
        return(
            <div className = "mycard">
                <div className="card auth-card input-field">
                    <h2>Connect.io</h2>
                    <input
                    ref={r => this.name = r}
                    type = "text"
                    placeholder = "name"
                    />
                    <input
                    ref={r => this.email = r}
                    type ="text"
                    placeholder = "email"
                    />
                    <input
                    ref={r => this.password = r}
                    type ="password"
                    placeholder = "password"
                    />
                    <button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
                    onClick={this.onSignup}>
                    {/* <Link to = "/Profile"> SignUp</Link>  */}
                        Signup
                    </button>
                    <h5>
                        <Link to ="/SignIn"> Already have an account?</Link>
                    </h5>

            </div>
            </div>
        )
    }
}
export default SignUp