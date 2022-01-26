import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { Avatar } from '../../common/components';
import { useUser } from '../../common/hooks';
import { ContactActions } from '../ContactActions';
import { ContactInfo } from '../ContactInfo';

export function ContactContent() {
  const { userId } = useParams();
  const { user, isLoading } = useUser(userId);

  if (isLoading) return 'Loading...';

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Avatar
        sx={{
          width: 96,
          height: 96,
        }}
        src={user.profileImage}
        username={user.username}
      />
      <ContactInfo />
      <ContactActions />
    </Box>
  );
}
