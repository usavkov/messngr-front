import { Grid } from '@mui/material';

import { ContentPane, DetailsPane, HomePane } from '../../components';

export function HomePage() {
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
  );
}
