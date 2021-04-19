import React from 'react';
import {Link} from 'react-router-dom'
import Navigation from './Navigation'
import person from '../assets/images/person.png'
import badge from '../assets/images/badge.jpeg'
import badge2 from '../assets/images/badge2.jpeg'
import badge3 from '../assets/images/badge3.jpeg'

const Profile = () => {
    return(
        <div>
            {/* <Navigation/> */}
        
        <div  style = {{
            display:'flex',
            justifyContent:"space-around",
            margin:"25px 120px",
            maxWidth:"1200px"

        }}>
            
            <div style={{width:'200px'}}>
                <img className = "image" style = {{width:"200px", height:"200px", borderRadius:"100px"}}
                src = {person}
                />
                <h4>Hamida Tajik</h4>
                <p>I am a Computer Engineering student at City College.
                    I love to read books and watch Netflix in my free time.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
            
                    <h4 style ={{textAlign:"left"}}>Badges</h4>
                    <div style = {{display:"flex", justifyContent:"space-between", width:"138%", margin:"30px 0px"}}>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = {badge}/>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = {badge3}/>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = {badge2}/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-between", width:"138%"}}>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = {badge2}/>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = {badge3}/>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = {badge}/>
                    </div>         

            </div>
            <div>
                <h4 style ={{textAlign:"left",margin:"50px 0px"}}>Connections</h4>
                <div style = {{display:"flex", justifyContent:"space-between", width:"138%"}}>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = {person}/>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = {person}/>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = {person}/>
                    </div>
                
                <h4 style ={{textAlign:"left", margin:"50px 0px"}}>Possible Connections</h4>
                <div style = {{display:"flex", justifyContent:"space-between", width:"138%"}}>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = {person}/>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = {person}/>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = {person}/>
                    </div>
                    <h5 style ={{textAlign:"left", margin:"50px 0px"}}>To view your full activity history</h5>
                    <button className="btn waves-effect waves-light" style = {{background: "black", margin:"0px 170px"}}>
                         <Link to = "/"> CLICK HERE</Link> 
                    </button>
                    
            </div>
            
            
        </div>
        </div>
    )
}
export default Profile