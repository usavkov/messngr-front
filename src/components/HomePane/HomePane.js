import { useRouteMatch } from "react-router-dom";

import { Grid } from "@mui/material";

import { DIALOGS_PATH } from "../../constants";
import { DialogsList } from "../../Dialogs";
import { Navigation, DynamicRoute, UserHeader } from "../index";


export const HomePane = () => {
  const { path } = useRouteMatch();

  return (
    <Grid
      item
      minWidth={300}
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
