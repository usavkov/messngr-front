import { Box } from '@mui/system';

export function MessagesContent({ children }) {
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
