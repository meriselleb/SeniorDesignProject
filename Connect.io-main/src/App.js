import React from 'react';
// import Messenger from './components/Messenger';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import Messages from './pages/messages'
import Threads from './pages/threads'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import UserProfile from './pages/profile'
import Resource from './pages/resources'
import Notifications from './pages/notifications'
import Connections from './pages/connections'
import Resume from './pages/resumes'
import Event from './pages/events'
import Job from './pages/jobs'

export default function App() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/messages" exact component={Messages} />
            <Route path="/threads" exact component={Threads} />
            <Route path="/notifications" exact component={Notifications} />
            <Route path="/connections" exact component={Connections} />
            <Route path="/resources" exact component={Resource} />
            <Route path="/profile" exact component={UserProfile} />
			<Route path="/resumes" exact component={Resume} />
			<Route path="/events" exact component={Event} />
			<Route path="/jobs" exact component={Job} />
          </Switch>
        </Router>
        {/* <Messenger /> */}
      </div>
    );
}
