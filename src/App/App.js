import { Switch, Route } from 'react-router-dom';

import {
  PAGE_SIGN_UP,
  PAGE_LOGIN,
  PAGE_HOME,
  PAGE_MAIN,
} from '../constants';
import {
  HomePage,
  MainPage,
  LoginPage,
  SignupPage,
} from '../pages';

import './App.scss';

const App = () => (
  <Switch>
    <Route
      exact
      path={PAGE_HOME}
      component={HomePage}
    />
    <Route
      path={PAGE_MAIN}
      component={MainPage}
    />
    <Route
      exact
      path={PAGE_SIGN_UP}
      component={SignupPage}
    />
    <Route
      exact
      path={PAGE_LOGIN}
      component={LoginPage}
    />
  </Switch>
);

export default App;
