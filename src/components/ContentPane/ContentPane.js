import { Grid, Paper } from '@mui/material';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { useAuth } from '../../common/hooks';
import { DIALOGS_PATH } from '../../constants';
import { DialogContent } from '../DialogContent';
import { DynamicRoute } from '../DynamicRoute';

export const ContentPane = () => {
  const { logout } = useAuth();
  const history = useHistory();
  const { path } = useRouteMatch()

  return (
    <Grid
      item
      sx={{
        flex: 'auto',
      }}
    >
      <DynamicRoute
        exact
        path={`${path}${DIALOGS_PATH}/:dialogId`}
        component={DialogContent}
      />
    </Grid>
  );
};
