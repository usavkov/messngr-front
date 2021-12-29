import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../common/hooks';
import { PAGE_HOME, PAGE_LOGIN } from '../../constants';

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
