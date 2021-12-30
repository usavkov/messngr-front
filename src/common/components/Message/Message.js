import {
  ListItem,
  Paper,
} from '@mui/material';

export const Message = ({
  content,
  currentUserId,
  from,
  to,
}) => {
  const isFromCurrentUser = from === currentUserId;
  
  const handleContextMenu = (e) => {
    // e.preventDefault();

    console.log('context')
  }

  return (
    <ListItem
      alignItems='flex-start'
      sx={{
        justifyContent: isFromCurrentUser ? 'flex-end' : 'flex-start',
      }}
      onContextMenu={handleContextMenu}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: '80%',
          filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.32))',
          bgcolor: isFromCurrentUser ? 'lightcoral' : '#eee',
          color: isFromCurrentUser && 'white',
          padding: '8px 16px',
          borderRadius: 6,
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            bottom: 12,
            [isFromCurrentUser ? 'right' : 'left']: -3,
            width: 10,
            height: 10,
            bgcolor: isFromCurrentUser ? 'lightcoral' : '#eee',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        }}
      >
        {content}
      </Paper>
    </ListItem>
  )
};
