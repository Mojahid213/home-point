import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      <Switch>
        <Route  path="/home">
          <Home></Home>

        </Route>
        <Route  path="/login">
          
          {
            user?<Home/> :<Login/> 
          }

        </Route>

        </Switch>
        </Router>
  );
}

export default App;
