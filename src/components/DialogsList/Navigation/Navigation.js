import { useHistory, useRouteMatch } from "react-router-dom";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

export const Navigation = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  return (
    <Paper
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation
      showLabels
      onChange={(event, newValue) => {
        history.push(`${path}/${newValue}`);
      }}
    >
      <BottomNavigationAction
        label="Dialogs"
        value='dialogs'
        icon={<PersonOutlineRoundedIcon />}
      />
      <BottomNavigationAction
        label="Chats"
        value='chats'
        icon={<GroupsRoundedIcon />}
      />
      <BottomNavigationAction
        label="Contacts"
        value='contacts'
        icon={<ImportContactsRoundedIcon/>}
      />
    </BottomNavigation>
    </Paper>
  )
};
