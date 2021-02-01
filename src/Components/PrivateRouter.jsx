import { Redirect, Route } from 'react-router-dom';
import { LOGIN } from '../constants/urls';

const PrivateRouter = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      localStorage.getItem('authTocken') ? (
        children
      ) : (
        <Redirect to={LOGIN} />
      )
    }
  />
);

export default PrivateRouter;
