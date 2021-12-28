
import { Paper } from "@mui/material";

import { Avatar, AvatarBadge } from "../../common/components";
import { useUser } from "../../common/hooks";
import { useAuth } from "../../utils";

export const UserHeader = () => {
  const { user: { userId } } = useAuth();
  const { user, isLoading } = useUser(userId);

  console.log(userId);

  return (
   <Paper elevation={0}>
     <AvatarBadge
      status={true}
     >
      <Avatar
        id={user.id}
        src={user.profileImage}
        username={user.username}
        isLoading={isLoading}
      />
     </AvatarBadge>
   </Paper>
  );
};
