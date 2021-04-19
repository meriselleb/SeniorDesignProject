import React from 'react';
import {Link} from 'react-router-dom'
import Navigation from './Navigation'

const Profile = () => {
    return(
        <div>
            <Navigation/>
        
        <div  style = {{
            display:'flex',
            justifyContent:"space-around",
            margin:"25px 120px",
            maxWidth:"1200px"

        }}>
            
            <div style={{width:'200px'}}>
                <img className = "image" style = {{width:"200px", height:"200px", borderRadius:"100px"}}
                src = "images/person.jpg"
                />
                <h4>Hamida Tajik</h4>
                <p>I am a junior at CCNY, studying Computer Science, and Commuunication Design.
                    I love to read books, write and watch Netflix in my free time. I am passionate about 
                    using technology to positively impact people's lives and am currently looking to 
                    connect with professionals in the non-profit industry.                    
                    </p>
            
                    <h4 style ={{textAlign:"left"}}>Badges</h4>
                    <div style = {{display:"flex", justifyContent:"space-between", width:"138%", margin:"30px 0px"}}>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = "images/badge1.png"/>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = "images/badge2.png"/>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = "images/badge3.png"/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-between", width:"138%"}}>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = "images/badge4.png"/>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = "images/badge5.png"/>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = "images/badge6.png"/>
                    </div>         

            </div>
            <div>
                <h4 style ={{textAlign:"left",margin:"50px 0px"}}>Connections</h4>
                <div style = {{display:"flex", justifyContent:"space-between", width:"138%"}}>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = "images/person1.png"/>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = "images/person2.png"/>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = "images/person3.png"/>
                    </div>
                <div style = {{display:"flex", justifyContent:"space-between", width:"134%"}}>
                <h5>John Doe</h5>
                <h5>John Doe</h5>
                <h5>John Doe</h5>
                </div>
                
                <h4 style ={{textAlign:"left", margin:"50px 0px"}}>Possible Connections</h4>
                <div style = {{display:"flex", justifyContent:"space-between", width:"138%"}}>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = "images/person4.png"/>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = "images/person5.png"/>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = "images/person6.png"/>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between", width:"134%"}}>
                <h5>John Doe</h5>
                <h5>John Doe</h5>
                <h5>John Doe</h5>
                </div>
                <div style = {{display:"flex", justifyContent:"space-between", width:"134%"}}>
                <button style ={{ height: "40px", width: "100px",borderRadius:"40px"}}>
                         <Link to = "/"> CONNECT</Link> 
                    </button>
                    <button style = {{ height: "40px", width: "100px",borderRadius:"40px"}}>
                         <Link to = "/"> CONNECT</Link> 
                    </button>
                    <button style = {{ height: "40px", width: "100px",borderRadius:"40px"}}>
                         <Link to = "/"> CONNECT</Link> 
                    </button>
                </div>
                    <h5 style ={{textAlign:"left", margin:"50px 0px"}}>To view your full activity history</h5>
                    <button className="btn waves-effect waves-light" style = {{background: "black", margin:"0px 170px"}}>
                         <Link to = "/"> CLICK HERE</Link> 
                    </button>
                    
            </div>

         </div>
         <div style = {{width:"100%", height:"250px",background: "rgb(0,150,200) 100%", display:"flex", justifyContent:"space-around", fontSize:'20px', fontFamily:"-moz-initial"}}>
           <h2 style={{margin: "100px 70px"}}> Connect.io</h2>
           <div style={{margin: "35px 50px"}}>
           <h5> <b>Connect With Us</b></h5>
           <img style = {{width:"40px", height:"35px", marginRight:"10px"}}
                    src = "images/fb.png"/>
            <img style = {{width:"40px", height:"35px", marginRight:"10px"}}
                    src = "images/twitter.png"/>
            <img style = {{width:"40px", height:"35px", marginRight:"10px"}}
                    src = "images/insta.png"/>
            <img style = {{width:"40px", height:"35px", marginRight:"10px"}}
                    src = "images/youtube.png"/>
            <p style={{textAlign:"center"}}>Questions for the team?</p> 
            <Link to="/tempjobboard"><button style = {{background: "rgb(102,178,255) 100%", marginLeft:"40px"}}
                > <h6>CONTACT US</h6></button>
                </Link> 
            </div>
            <div style={{margin: "35px 50px"}}>
            <h5 style={{textAlign:"center"}}> <b>Support Us</b></h5>
            <Link to="/tempjobboard"><button style = {{background: "rgb(102,178,255) 100%", marginLeft:"50px"}}
                > <h6>DONATE NOW</h6></button>
                </Link>
                <p style={{textAlign:"center"}}>Interested in learning more?</p>
                <Link to="/tempjobboard"><button style = {{background: "rgb(102,178,255) 100%", marginLeft:"50px"}}
                > <h6>LEARN MORE</h6></button>
                </Link>
            </div>
           
           </div>
            
        </div>
        
    )
}
export default Profile