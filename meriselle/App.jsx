import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResourcesPage from "./ResourcesPG/ResourcesPage";
import TempResume from './ResourcesPG/TempResume';
import HomeBar from './ResourcesPG/HomeBar';
import NotificationsPage from './ResourcesPG/NotificationsPage';
import ConnectionsPage from './ResourcesPG/ConnectionsPage';
import tempinbox from './ResourcesPG/tempInbox';
import tempjobboard from './ResourcesPG/tempjobboard';
import tempnetworking from './ResourcesPG/tempnetworking';
import TopicsPage from './ResourcesPG/TopicsPage';

import styled from "styled-components"

const BG = styled.div`
display: fixed;
position: absolute;
top: 0;
left: 0;
background: ghostwhite;
width: 100vw;
height: 100vh;
z-index: -100;
`;

class App extends React.Component {
   render() {
      const div_style = {
         fontFamily: "Helvetica"
      };
      return (
         <div style={div_style}>
            <BG />  
            <BrowserRouter>
            {/* home bar */}      
            <HomeBar hello="world" />
               <Switch>
                  <Route exact path="/ResourcesPage" component={ResourcesPage} />
                  <Route path="/TempResume" component={TempResume} />
                  <Route path="/NotificationsPage" component={NotificationsPage} />
                  <Route path="/ConnectionsPage" component={ConnectionsPage} />
                  <Route path="/TopicsPage" component={TopicsPage} />
                  <Route path="/tempInbox" component={tempinbox} />
                  <Route path="/tempnetworking" component={tempnetworking} />
                  <Route path="/tempjobboard" component={tempjobboard} />
               </Switch>
            </BrowserRouter>
         </div>
      );
   }
}

export default App;
