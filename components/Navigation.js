import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return(
            <nav>
                <div className = "nav-wrapper">
                    <a href ="#" className = "brand-logo">Connect.io</a>
                    <ul id = "nav-mobile" className = "right">
                        <li><Link exact to = "/">Home</Link></li>    
                        <li><Link to = "/Messages">Messages</Link></li>   
                        <li><Link to = "/MyNetwork">MyNetwork</Link></li>    
                        <li><Link to = "/Notifications">Notifications</Link></li>    
                        <li><Link to = "/Resources">Resources</Link></li>    
                        <li><Link to = "/Profile">Profile</Link></li>

                    </ul>
                </div>
            </nav>
    )
}
export default Navigation