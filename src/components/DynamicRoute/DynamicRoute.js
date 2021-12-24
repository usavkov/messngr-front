import { Route, Redirect } from 'react-router-dom';
import { PAGE_HOME, PAGE_LOGIN } from '../../constants';

import { useAuth } from '../../utils';

export const DynamicRoute = ({
  component,
  path,
  exact,
  authorized,
  guest,
  ...rest
}) => {
  const { user } = useAuth();

  if (authorized && !user) return <Redirect to={PAGE_LOGIN} />;
  if (guest && user) return <Redirect to={PAGE_HOME} />;

  return (
    <Route
      exact={exact}
      path={path}
      component={component}
      {...rest}
    />
  );
};
