import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = ()=>{
    return(
        <div className = "mycard">
            <div className="card auth-card input-field">
                <h2>Connect.io</h2>
                <input
                type ="text"
                placeholder = "name"
                />
                <input
                type ="text"
                placeholder = "email"
                />
                <input
                type ="text"
                placeholder = "password"
                />
                  <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">
                  <Link to = "/Profile"> SignUp</Link> 
                  </button>
                <h5>
                    <Link to ="/SignIn"> Already have an account?</Link>
                </h5>

        </div>
        </div>
    )
}
export default SignUp