import { Switch, Route, Redirect } from 'react-router-dom';

import { DynamicRoute } from '../components/DynamicRoute';
import {
  PAGE_SIGN_UP,
  PAGE_LOGIN,
  PAGE_HOME,
  PAGE_MAIN,
  ROUTE_ROOT,
} from '../constants';
import {
  HomePage,
  LoginPage,
  SignupPage,
} from '../pages';

import './App.scss';

const App = () => (
  <Switch>
    {/* <Route exact path={ROUTE_ROOT}>
      <Redirect to={PAGE_HOME} />
    </Route> */}
    <DynamicRoute
      exact
      path={PAGE_HOME}
      component={HomePage}
    />
    <DynamicRoute
      exact
      path={PAGE_SIGN_UP}
      component={SignupPage}
      guest
    />
    <DynamicRoute
      exact
      path={PAGE_LOGIN}
      component={LoginPage}
      guest
    />
    <Route>
      <Redirect to={PAGE_HOME} />
    </Route>
  </Switch>
);

export default App;
