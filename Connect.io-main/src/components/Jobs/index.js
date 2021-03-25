import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button`
background: cornflowerblue;
border-radius: 8px;
color: white;
height: ${props => props.small ? 60 : 100}px;
width: ${props => props.small ? 90 : 180}px;
vertical-align: top;
margin-left: 10px;
margin-right: 10px;
margin-top: 10px;
margin-bottom: 10px;
`;

class Jobs extends React.Component {
  render() {
    const style = {
      textAlign: 'center',
    }
    return (
      <div style={style}>

        <h2><br />Welcome to the Job Board<br /></h2>
        
        <h4><br />Please review these instructions before applying:<br /><br /></h4>
        <p>1. Use the <strong><em>Sort</em></strong> feature to look for opportunities based on industry, name, position, and company.</p>
        <p>2. Use the <strong><em>Filter</em></strong> feature to search for keywords.</p>
        <p>3. Click on the cards to read more about the opportunity you are interested in.</p>
        <p>4. If you need a bigger window, click at the bottom right corner to view a larger version.</p>
        <p>5. After finding an opportunity, please look through our career resources.</p>

        <br /><hr />
        <h2>Jobs<br /></h2>
        <p><sub>Sort | Filter</sub></p>

        <Link to="/temp"><Button>
          Fudiciary Trust Company International
          </Button>
        </Link>
        <Link to="/temp"><Button>
          Jefferies
          </Button>
        </Link>
        <Link to="/temp"><Button> 
          L'Oréal
          </Button>
        </Link>
        <Link to="/temp"><Button>
          Marsh &amp; McLennan Companies
          </Button>
        </Link>

        <p><br /><em>If you come across a role that is no longer open, please fill out this report to notify us that the role is closed.<br />Thank you!</em></p>
        <p><a href="#">Report a Closed Role</a></p>

      </div>
    );
  }
}

export default Jobs;