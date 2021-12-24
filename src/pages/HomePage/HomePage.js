import { useRouteMatch, useHistory } from 'react-router-dom';

import { ACTION_LOGOUT, PAGE_SETTINGS } from "../../constants";
import { useAuth } from "../../utils";
import { DynamicRoute } from "../../components"
import { GuestPage } from "../GuestPage";
import { useEffect } from 'react';


export const HomePage = () => {
  const { user, authDispatch } = useAuth();
  const history = useHistory();
  const { path } = useRouteMatch();

  return (
    <>
      Bearer {localStorage.getItem('token')}
    </>
  )
}
