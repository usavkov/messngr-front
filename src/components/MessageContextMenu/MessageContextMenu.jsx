import { Divider, Menu, MenuItem } from '@mui/material';
import { useDeleteMessage } from '../../common/hooks';

export function MessageContextMenu({
  anchorPosition,
  messageId,
  onClose,
  isOpen,
  isFromCurrentUser,
}) {
  // TODO: add confirm modal on delete
  const { deleteMessage } = useDeleteMessage(messageId);

  return (
    <Menu
      open={isOpen}
      onClose={onClose}
      anchorReference="anchorPosition"
      anchorPosition={anchorPosition}
    >
      <MenuItem onClick={onClose}>Copy</MenuItem>
      <Divider />
      {isFromCurrentUser && (
        <MenuItem
          onClick={() => {
            deleteMessage();
            onClose();
          }}
          sx={{
            color: 'darkred',
          }}
        >
          Delete
        </MenuItem>
      )}
    </Menu>
  );
}
