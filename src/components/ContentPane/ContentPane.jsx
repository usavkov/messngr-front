import { Grid } from '@mui/material';
import { useRouteMatch } from 'react-router-dom';

import {
  CONTACTS_PATH,
  DIALOGS_PATH,
} from '../../constants';
import { DynamicRoute } from '../DynamicRoute';

import { ContactContent } from '../../Contacts';
import { DialogContent } from '../../Dialogs';

export function ContentPane() {
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
      <DynamicRoute
        exact
        path={`${path}${CONTACTS_PATH}/:userId`}
        component={ContactContent}
      />
    </Grid>
  );
}
