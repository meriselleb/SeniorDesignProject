import React from 'react';
import {Link } from "react-router-dom";
import styled from "styled-components";

const HomeButton = styled.button`
background: cornflowerblue;
border-radius: 2px;
color: white;
margin-left: 2px;
margin-right: 2px;
border-width: 0px;
`;


class HomeBar extends React.Component {
    render() {
        const style = {
            textAlign: 'left',
            width: '100vw',
            height: '50px',
            background: 'lightsteelblue',
        }
        return (
            <div style={style}>
                {/*This is homebar. My hello prop is {this.props.hello}*/}
                <div style={{display: 'inline-block', width: '200px', marginTop: '10px', marginLeft: '2px'}}>
                    APP NAME
                </div>
                <div style={{display: 'inline-block', width: 'calc(100vw - 202px)', textAlign: 'right'}}>
                    <Link to="/TopicsPage"><HomeButton>
                    Home
                    </HomeButton>
                    </Link>
                    <Link to="/ConnectionsPage"><HomeButton>
                    My Network
                    </HomeButton>
                    </Link>
                    <Link to="/tempinbox"><HomeButton>
                    Inbox
                    </HomeButton>
                    </Link>
                    <Link to="/NotificationsPage"><HomeButton>
                    Notifications
                    </HomeButton>
                    </Link>
                    <Link to="/ResourcesPage"><HomeButton>
                    Resources
                    </HomeButton>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomeBar;