import { useRouteMatch } from 'react-router-dom';

import { Grid } from '@mui/material';

import { CONTACTS_PATH, DIALOGS_PATH } from '../../constants';
import { Navigation, DynamicRoute, UserHeader } from '../index';
import { ContactsList } from '../../Contacts';
import { DialogsList } from '../../Dialogs';

export function HomePane() {
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
      <DynamicRoute
        path={`${path}${CONTACTS_PATH}`}
        component={ContactsList}
      />

      <Navigation />
    </Grid>
  );
}
