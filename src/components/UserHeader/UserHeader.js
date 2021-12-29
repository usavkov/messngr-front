import React, { useState } from 'react';

import { Box, IconButton } from '@mui/material';

import { Avatar, AvatarBadge } from '../../common/components';
import { useAuth, useToggle, useUser } from '../../common/hooks';
import { UserHeaderMenu } from './UserHeaderMenu';

export const UserHeader = () => {
  const auth = useAuth();
  const { user, isLoading } = useUser(auth?.user?.userId);
  const [isMenuOpen, toggleMenu] = useToggle(); 

  const [anchorEl, setAnchorEl] = useState(null);

  const closeMenu = () => {
    toggleMenu();
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        padding: '3px',
        width: 'auto',
      }}
    >
      <IconButton
        onClick={(e) => {
          toggleMenu();
          setAnchorEl(e.currentTarget);
        }}
        size="large"
      >
        <AvatarBadge
          badgebgcolor="#eee"
          status
        >
          <Avatar
            id={user.id}
            src={user.profileImage}
            username={user.username}
            isLoading={isLoading}
            sx={{
              height: 48,
              width: 48,
            }}
          />
        </AvatarBadge>
      </IconButton>
      <UserHeaderMenu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={closeMenu}
      />
    </Box>
  );
};
