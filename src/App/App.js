import { Redirect, Switch } from 'react-router-dom';

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
import { useAuth } from '../utils';

import './App.scss';

const App = () => {
  const { user } = useAuth();

  console.log(user);

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
              path={`${PAGE_HOME}:username`}
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
        <DynamicRoute path={PAGE_HOME} component={Page404}/>
      </Switch>
    </>
  )
};

export default App;
