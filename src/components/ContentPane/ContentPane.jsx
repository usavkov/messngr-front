import { Grid, Paper } from '@mui/material';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { useAuth } from '../../common/hooks';
import { DIALOGS_PATH } from '../../constants';
import { DynamicRoute } from '../DynamicRoute';

import { DialogContent } from '../../Dialogs';

export function ContentPane() {
  const { logout } = useAuth();
  const history = useHistory();
  const { path } = useRouteMatch();

  return (
    <Grid
      item
      sx={{
        flex: 'auto',
        height: '100vh',
        position: 'relative',
      }}
    >
      <DynamicRoute
        exact
        path={`${path}${DIALOGS_PATH}/:dialogId`}
        component={DialogContent}
      />
    </Grid>
  );
}
