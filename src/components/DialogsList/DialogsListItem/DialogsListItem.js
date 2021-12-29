import { useHistory, useRouteMatch, useParams } from 'react-router-dom';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

import { Avatar, AvatarBadge } from '../../../common/components';

export const DialogsListItem = ({
  id,
  firstName,
  lastName,
  lastMessage,
  profileImage,
  username,
  isCurrentUser,
  activeDialog,
}) => {
  const history = useHistory();
  const { url } = useRouteMatch()

  const getTitle = () => (
    (firstName && lastMessage) || username
  );

  const title = isCurrentUser ? 'Saved' : getTitle();

  const isActive = activeDialog === id;

  const previewMessage = (
    <Typography
      noWrap
      sx={{
        fontSize: 12,
        color: 'gray'
      }}
    >
      {lastMessage}
    </Typography>
  )

  return (
    <ListItem
      button
      sx={{
        backgroundColor: isCurrentUser ? '#deffd9' : 'white',
        ...(isActive ? { backgroundColor: '#f5e9da' } : {}),
        borderRadius: 2,
        margin: '3px',
        width: 'auto',
      }}
      onClick={() => history.push(`${url}/${id}`)}
    >
      <ListItemAvatar>
        <AvatarBadge
          badgebgcolor={isCurrentUser ? '#deffd9' : null}
          status={false}
          hide={isCurrentUser}
        >
          <Avatar
            alt='Dialog Picture'
            src={profileImage}
            username={username}
            sx={{
              bgcolor: isCurrentUser && '#88c9db'
            }}
          >
            {isCurrentUser ? <BookmarkBorderIcon /> : null}
          </Avatar>
        </AvatarBadge>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={previewMessage}
      />
    </ListItem>
  );
};
