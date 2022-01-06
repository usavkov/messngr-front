import { Grid } from '@mui/material';
import {
  useParams, useHistory, useLocation, useRouteMatch,
} from 'react-router-dom';

import { useAuth } from '../../common/hooks';

export function DetailsPane({ open }) {
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
}
