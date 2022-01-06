import { Box } from '@mui/system';

export function Content({ children }) {
  return (
    <Box
      sx={{
        flex: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse',
        overflowY: 'scroll',
      }}
    >
      {children}
    </Box>
  );
}
