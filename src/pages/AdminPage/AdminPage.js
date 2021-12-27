import { Switch, useRouteMatch } from "react-router";

import { DynamicRoute, UsersList } from "../../components";

export const AdminPage = () => {
  const { path } = useRouteMatch();

  return (
    <>Admin</>
  )
}
