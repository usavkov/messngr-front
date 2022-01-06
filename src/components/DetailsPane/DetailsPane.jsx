import { Grid } from '@mui/material';

export function DetailsPane({ open }) {
  if (!open) return null;

  return (
    <Grid
      item
    >
      Details
    </Grid>
  );
}
