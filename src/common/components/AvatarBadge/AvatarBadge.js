import { includes } from 'lodash';

import { Badge } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { styled } from "@mui/system";

const StyledBadge = styled(Badge, {
  shouldForwardProp: (prop) => !includes(['online'], prop),
})(({ theme, status }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: status ? '#44b700' : 'red',
    color: status ? '#44b700' : 'red',
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

const AvatarBadge = ({
  children,
  isLoading,
  status,
  ...props
}) => {
  const theme = useTheme();

  if (isLoading) return 'Loading...'

  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
      theme={theme}
      status={status}
      {...props}
    >
     {children}
    </StyledBadge>
  )
};

export default AvatarBadge;
