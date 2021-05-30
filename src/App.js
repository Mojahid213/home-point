import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {selectUser } from './features/userSlice';
import Login from './components/Login/Login'
import { useSelector } from 'react-redux';
import Destination from "./components/Destinatioin/Destinaiton"

function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      <Switch>
      <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          {
              user? <Destination></Destination> : <Login></Login>
          }
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
