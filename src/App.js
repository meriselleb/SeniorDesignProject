import {NavLink, Route} from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Messages from './components/Messages'
import Navigation from './components/Navigation'
import MyNetwork from './components/MyNetwork'
import Notifications from './components/Notifications'
import Resources from './components/Resources'
import Profile from './components/Profile'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'




function App() {
  return (
    <div className="App">
      <Navigation/>
      <switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/Messages" component = {Messages}/>
        <Route path = "/MyNetwork" component = {MyNetwork}/>
        <Route path = "/Notifications" component = {Notifications}/>
        <Route path = "/Resources" component = {Resources}/>
        <Route path = "/Profile" component = {Profile}/>
        <Route path = "/SignIn" component = {SignIn}/>
        <Route path = "/SignUp" component = {SignUp}/>

      </switch>
    </div>
  );
}

export default App;
