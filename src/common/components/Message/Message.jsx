import { ListItem, Paper } from '@mui/material';

import { MessageContextMenu } from '../../../components';
import { useContextMenu } from '../../hooks';

export function Message({
  content, currentUserId, from, to, id,
}) {
  const {
    anchorPosition, closeMenu, onContextMenu, isOpen,
  } = useContextMenu();

  const isFromCurrentUser = from === currentUserId;

  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        justifyContent: isFromCurrentUser ? 'flex-end' : 'flex-start',
      }}
      onContextMenu={onContextMenu}
    >
      <MessageContextMenu
        messageId={id}
        anchorPosition={anchorPosition}
        onClose={closeMenu}
        isFromCurrentUser={isFromCurrentUser}
        isOpen={isOpen}
      />
      <Paper
        elevation={0}
        sx={{
          maxWidth: '80%',
          filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.32))',
          bgcolor: isFromCurrentUser ? 'lightcoral' : '#469fbd',
          color: 'white',
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
            bgcolor: isFromCurrentUser ? 'lightcoral' : '#469fbd',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        }}
      >
        {content}
      </Paper>
    </ListItem>
  );
}
