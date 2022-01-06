import { useState } from 'react';

import { Logout, Settings } from '@mui/icons-material';
import { Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';

import { Avatar } from '../../../common/components';
import { useAuth } from '../../../common/hooks';

export const UserHeaderMenu = ({ open, anchorEl, onClose }) => {
  const { logout } = useAuth();

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: .5,
          '& .MuiAvatar-root': {
            width: 18,
            height: 18,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 18,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
    >
      <MenuItem>
        <Avatar />
        Profile
      </MenuItem>
      <MenuItem>
        <Avatar />
        My account
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem
        onClick={logout}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};
