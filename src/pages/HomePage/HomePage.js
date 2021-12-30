import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import { Grid } from '@mui/material';

import { useAuth } from '../../common/hooks';
import { ContentPane, DetailsPane, HomePane } from "../../components"


export const HomePage = () => {
  const { user, logout } = useAuth();
  const history = useHistory();
  const { pathname } = useLocation();
  const { path } = useRouteMatch();

  return (
    <Grid
      container
      sx={{
        position: 'relative',
        flexWrap: 'nowrap',
      }}
    >
      <HomePane />
      <ContentPane />
      <DetailsPane />
    </Grid>
  )
}
