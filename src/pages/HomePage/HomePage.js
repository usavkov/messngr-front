import { useRouteMatch, useHistory, useLocation, Link } from 'react-router-dom';

import { PAGE_SETTINGS } from "../../constants";
import { useAuth } from "../../utils";
import { DynamicRoute, HomePane } from "../../components"
import { GuestPage } from "../GuestPage";
import { useEffect } from 'react';
import { Button, Container, Grid, Paper } from '@mui/material';


export const HomePage = () => {
  const { user, logout } = useAuth();
  const history = useHistory();
  const { pathname } = useLocation();
  const { path } = useRouteMatch();

  return (
    <Grid container>
       <HomePane />
      <Paper>
        <Grid item xs={9}>
          <button onClick={() => {
            logout();
            history.go(0);
          }}>
            Logout
          </button>
        </Grid>
      </Paper>
    </Grid>
  )
}
