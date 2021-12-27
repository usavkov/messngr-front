import { useRouteMatch, useHistory, useLocation, Link } from 'react-router-dom';

import { ACTION_LOGOUT, PAGE_SETTINGS } from "../../constants";
import { useAuth } from "../../utils";
import { DynamicRoute, HomePane } from "../../components"
import { GuestPage } from "../GuestPage";
import { useEffect } from 'react';
import { Button, Container, Grid, Paper } from '@mui/material';


export const HomePage = () => {
  const { user, authDispatch } = useAuth();
  const history = useHistory();
  const { pathname } = useLocation();
  const { path } = useRouteMatch();

  return (
    <Grid container>
       <HomePane />
      <Paper>
        <Grid item xs={9}>
          <button onClick={() => {
            authDispatch({ type: ACTION_LOGOUT });
            history.go(0);
          }}>
            Logout
          </button>
        </Grid>
      </Paper>
    </Grid>
  )
}
