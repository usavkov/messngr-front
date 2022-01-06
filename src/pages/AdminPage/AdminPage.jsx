import { Switch, useRouteMatch } from 'react-router';

import { DynamicRoute, UsersList } from '../../components';

export function AdminPage() {
  const { path } = useRouteMatch();

  return (
    <>Admin</>
  );
}
