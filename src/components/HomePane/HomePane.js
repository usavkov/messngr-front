import { useLocation, useRouteMatch, useParams } from "react-router-dom";

import { Grid } from "@mui/material";

import { DIALOGS_PATH, PAGE_HOME } from "../../constants";
import { DynamicRoute } from '../DynamicRoute';
import { DialogsList, Navigation } from '../DialogsList';
import { UserHeader } from "../UserHeader";


export const HomePane = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const { path } = useRouteMatch();

  console.log(pathname);
  console.log(params);
  console.log(path);

  return (
    <Grid
      item
      xs={3}
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundColor: '#eee',
      }}
    >
      <UserHeader />

      <DynamicRoute
        path={`${path}${DIALOGS_PATH}`}
        component={DialogsList}
      />

      <Navigation />
    </Grid>
  )
};
