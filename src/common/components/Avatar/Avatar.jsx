import { head } from 'lodash';

import { Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { getColor } from '../../../utils';

function AvatarComponent({
  id,
  src,
  username,
  isLoading,
  sx,
  children,
  ...props
}) {
  const theme = useTheme();

  if (isLoading) return 'Loading...';

  return (
    <Avatar
      alt="Dialog Picture"
      src={src}
      sx={{
        bgcolor: getColor({ id }),
        ...sx,
      }}
      {...props}
    >
      {children ?? head(username)?.toUpperCase()}
    </Avatar>
  );
}

export default AvatarComponent;
