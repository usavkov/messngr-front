import { useHistory, useRouteMatch } from 'react-router-dom';

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

import { Avatar } from '../../common/components';
import { getUserTitle } from '../../utils';

export function ContactsListItem({
  id,
  firstName,
  lastName,
  lastMessage,
  profileImage,
  username,
  ...rest
}) {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <ListItem
      id={id}
      button
      sx={{
        // backgroundColor: isCurrentUser ? '#deffd9' : 'white',
        // ...(isActive ? { backgroundColor: '#f5e9da' } : {}),
      }}
      onClick={() => history.push({
        pathname: `${url}/${id}`,
      })}
      {...rest}
    >
      <ListItemAvatar>
        <Avatar
          alt="Dialog Picture"
          src={profileImage}
          username={username}
        />
      </ListItemAvatar>
      <ListItemText
        primary={getUserTitle({
          firstName,
          lastMessage,
          username,
        })}
        secondary={username}
      />
    </ListItem>
  );
}
