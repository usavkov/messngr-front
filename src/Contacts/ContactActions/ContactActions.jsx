import BlockIcon from '@mui/icons-material/Block';
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { IconButton, ButtonGroup } from '@mui/material';

export function ContactActions() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <IconButton>
        <PersonAddIcon />
      </IconButton>
      <IconButton>
        <CallIcon />
      </IconButton>
      <IconButton>
        <ChatIcon />
      </IconButton>
      <IconButton>
        <VideoCallIcon />
      </IconButton>
      <IconButton>
        <BlockIcon />
      </IconButton>
    </ButtonGroup>
  );
}
