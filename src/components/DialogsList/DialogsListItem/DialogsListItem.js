import { head, includes } from "lodash";

import { Avatar, Badge, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { styled } from '@mui/material/styles';

import { getColor } from "../../../utils";
import { useHistory, useRouteMatch } from "react-router-dom";
import { DIALOGS_PATH } from "../../../constants";

const StyledBadge = styled(Badge, {
  shouldForwardProp: (prop) => !includes(['online'], prop),
})(({ theme, online }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: online ? '#44b700' : 'red',
    color: online ? '#44b700' : 'red',
    boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}));

export const DialogsListItem = ({
  id,
  firstName,
  lastName,
  lastMessage,
  profileImage,
  username,
}) => {
  const history = useHistory();
  const { path } = useRouteMatch();

  return (
    <ListItem
      button
      // divider
      sx={{
        backgroundColor: 'white',
        borderRadius: 2,
        margin: '3px',
        width: 'auto',
      }}
      onClick={() => history.push(`${path}/${id}`)}
    >
      <ListItemAvatar>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          online={false}
        >
          <Avatar
            alt="Dialog Picture"
            src={profileImage}
            sx={{
              bgcolor: getColor({ id })
            }}
          >
            {
              !profileImage && (
                head(username).toUpperCase()
              )
            }
          </Avatar>
        </StyledBadge>
      </ListItemAvatar>
      <ListItemText
        primary={username}
        secondary={lastMessage}
      />
    </ListItem>
  )
}
