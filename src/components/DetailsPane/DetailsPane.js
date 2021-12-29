import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import { useAuth } from '../../common/hooks';

export const DetailsPane = ({ open }) => {
  const { user, logout } = useAuth();
  const history = useHistory();
  const locations = useLocation();
  const { path } = useRouteMatch();

  const params = useParams();

  if (!open) return null;

  return (
    <Grid
      item
    >
      Details
    </Grid>
  );
};
