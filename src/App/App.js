import { Redirect, Route, Switch } from 'react-router-dom';

import { useAuth } from '../common/hooks';
import { DynamicRoute } from '../components/DynamicRoute';
import {
  DIALOGS_PATH,
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

import './App.scss';

const App = () => {
  const { user } = useAuth();

  return (
    <>
      <Switch>
        <DynamicRoute
          exact
          path='/'
          render={() => (
            user
              ? <Redirect to={`${PAGE_HOME}${user.username}${DIALOGS_PATH}`} />
              : <GuestPage />
          )}
        />
        {
          user && (
            <DynamicRoute
              path={`/user/:username`}
              component={HomePage}
            />
          )
        }
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
        <Route
          path='/'
          render={() => <Redirect to={user ? `${PAGE_HOME}/${user.username}${DIALOGS_PATH}` : PAGE_LOGIN} />}
        />
      </Switch>
    </>
  )
};

export default App;
