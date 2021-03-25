import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button`
background: cornflowerblue;
border-radius: 8px;
color: white;
height: ${props => props.small ? 180 : 300}px;
width: ${props => props.small ? 270 : 540}px;
vertical-align: top;
margin-left: 10px;
margin-right: 10px;
margin-top: 10px;
margin-bottom: 10px;
`;

class Events extends React.Component {
  render() {
    const style = {
      textAlign: 'center',
    }
    return (
      <div style={style}>

        <h2><br />Career/Networking Events<br /></h2>

        <Link to="/temp"><Button>
          [Calendar To Come]
          </Button>
        </Link>

        <hr />
        <h2>Past Events</h2>
        <h3><br />McDonald's Global Headquarters - October 11th | 12:30 PM to 4:30 PM<br /></h3>
        <h4><em>Industry: All</em></h4>
        <p>Join us for a visit to McDonald's Global Headquarters. Their team has organized a panel of executives in various roles throughout the company. Additionally, you'll participate in workshops that give you insight into their business model. Lunch will be provided and you'll have the opportunity to sample new menu items.</p>

        <h3><br />Arco Murray Site Visit - October 25th | 11:30 AM to 1:30 PM<br /></h3>
        <h4><em>Industry: Architecture, Construction, Engineering</em></h4>
        <p>This event is a visit to a new wedding venue that Arco Murray is constructing. We will get a tour of the construction site and the opportunity to meet and network with professionals. Lunch will be provided.</p>
        <br />

      </div>
    );
  }
}

export default Events;