import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PrivateRouter from './Components/PrivateRouter';
import { HOME, LOGIN } from './constants/urls';
import Home from './Pages/Home';
import Login from './Pages/Login';
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={LOGIN}>
          <Login />
        </Route>
        <PrivateRouter path={HOME}>
          <Home />
        </PrivateRouter>
      </Switch>
    </Router>
  );
}

export default App;
