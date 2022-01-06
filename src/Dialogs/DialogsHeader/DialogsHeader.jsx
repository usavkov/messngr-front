import { Paper, Typography } from '@mui/material';

export function DialogsHeader({ children }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        height: 'fit-content',
      }}
    >
      <Typography align="center">
        Title
      </Typography>
    </Paper>
  );
}
