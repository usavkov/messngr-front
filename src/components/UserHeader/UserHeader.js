
import { Paper } from "@mui/material";

import { useUser } from "../../common/hooks";
import { useAuth } from "../../utils";

export const UserHeader = () => {
  const { user: { userId } } = useAuth();
  const { user, isLoading } = useUser(userId);

  return (
   <Paper elevation={0}>
     
   </Paper>
  );
};
