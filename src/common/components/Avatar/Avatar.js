import { head } from 'lodash';

import { Avatar } from "@mui/material";
import { useTheme } from '@mui/material/styles';

import { getColor } from "../../../utils";

const AvatarComponent = ({
  id,
  src,
  username,
  isLoading,
}) => {
  const theme = useTheme();

  console.log(theme);

  if (isLoading) return 'Loading...'

  return (
    <Avatar
      alt="Dialog Picture"
      src={src}
      sx={{
        bgcolor: getColor({ id })
      }}
    >
      {
        !src && (
          head(username)?.toUpperCase()
        )
      }
    </Avatar>
  )
};

export default AvatarComponent;
