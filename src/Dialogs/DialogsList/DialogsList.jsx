import { List, Typography } from '@mui/material';

import { useAuth, useUserDialogs } from '../../common/hooks';
import { DialogsListItem } from '../DialogsListItem';

export function DialogsList() {
  const { user } = useAuth();
  const { dialogs, isLoading } = useUserDialogs();

  // const activeDialog = pathname.match(new RegExp(`${url}\/(.+)\/?`))?.[1];
  const activeDialog = false;

  if (isLoading) return 'Loading...';

  const getInterlocutor = (interlocutors, id) => (
    interlocutors.length === 2
      ? user.userId !== id
      : user.userId === id
  );

  return dialogs.length ? (
    <List disablePadding>
      {dialogs.map(({ id, interlocutors, messages }) => {
        const interlocutor = interlocutors.find(({ id: interlocutorId }) => getInterlocutor(interlocutors, interlocutorId));
        const lastMessage = messages[0];
        const isCurrentUser = user.userId === interlocutor?.id;

        return (
          <DialogsListItem
            key={id}
            id={`dialog-${id}`}
            dialogId={id}
            interlocutor={interlocutor}
            activeDialog={activeDialog}
            lastMessage={lastMessage}
            isCurrentUser={isCurrentUser}
          />
        );
      })}
    </List>
  ) : (
    <Typography
      variant="caption"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        color: 'gray',
        m: 3,
      }}
    >
      There are no dialogues yet
    </Typography>
  );
}
