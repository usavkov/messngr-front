import { Switch } from 'react-router-dom';
import { Navigation } from '../components';

import { DynamicRoute } from '../components/DynamicRoute';
import {
  PAGE_SIGN_UP,
  PAGE_LOGIN,
  PAGE_HOME,
  PAGE_ADMIN,
} from '../constants';
import {
  HomePage,
  LoginPage,
  SignupPage,
  Page404,
  AdminPage,
} from '../pages';
import { GuestPage } from '../pages/GuestPage';
import { useNavigation, useAuth } from '../utils';

import './App.scss';

const App = () => {
  const { user } = useAuth();
  const { links } = useNavigation();

  return (
    <>
      <Navigation links={links} variant="tabs" />
      <Switch>
        <DynamicRoute
          exact
          path={PAGE_HOME}
          component={user ? HomePage: GuestPage}
        />
        <DynamicRoute
          path={PAGE_ADMIN}
          component={AdminPage}
          authorized
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
        <DynamicRoute path={PAGE_HOME} component={Page404}/>
      </Switch>
    </>
  )
};

export default App;
