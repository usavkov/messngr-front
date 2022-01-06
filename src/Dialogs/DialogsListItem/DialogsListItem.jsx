import { useHistory, useRouteMatch } from 'react-router-dom';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

import { Avatar, AvatarBadge } from '../../common/components';
import { getUserTitle } from '../../utils';

export function DialogsListItem({
  id,
  dialogId,
  interlocutor: {
    firstName,
    lastName,
    username,
    profileImage,
    id: interlocutorId,
  },
  lastMessage,
  isCurrentUser,
  activeDialog,
}) {
  const history = useHistory();
  const { url } = useRouteMatch();

  const title = isCurrentUser
    ? 'Saved'
    : getUserTitle({
      firstName,
      lastName,
      username,
    });

  const isActive = activeDialog === dialogId;

  const getBgColorForCurrentUser = () => (isCurrentUser ? '#deffd9' : null);
  const getBgColorForUser = () => (isActive ? '#f5e9da' : getBgColorForCurrentUser());

  const previewMessage = (
    <Typography
      noWrap
      sx={{
        fontSize: 12,
        color: 'gray',
        whiteSpace: 'pre-line',
        maxHeight: '18px',
        overflowY: 'hidden',
      }}
    >
      {lastMessage?.content}
    </Typography>
  );

  return (
    <ListItem
      id={id}
      button
      sx={{
        backgroundColor: isCurrentUser ? '#deffd9' : 'white',
        ...(isActive ? { backgroundColor: '#f5e9da' } : {}),
        borderRadius: 2,
        margin: '3px',
        width: 'auto',
      }}
      onClick={() =>
        history.push({
          pathname: `${url}/${dialogId}`,
          state: { interlocutorId },
        })}
    >
      <ListItemAvatar>
        <AvatarBadge
          badgebgcolor={getBgColorForUser()}
          status={false}
          hide={isCurrentUser}
        >
          <Avatar
            alt="Dialog Picture"
            src={profileImage}
            username={username}
            sx={{
              bgcolor: isCurrentUser && '#88c9db',
            }}
          >
            {isCurrentUser ? <BookmarkBorderIcon /> : null}
          </Avatar>
        </AvatarBadge>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={previewMessage} />
    </ListItem>
  );
}
