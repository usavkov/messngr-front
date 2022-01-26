import { List, Typography } from '@mui/material';

import { useAuth } from '../../common/hooks';
import { DialogsListItem } from '../DialogsListItem';

export function DialogsList({
  dialogs,
  isLoading,
}) {
  const { user } = useAuth();

  // const activeDialog = pathname.match(new RegExp(`${url}\/(.+)\/?`))?.[1];
  const activeDialog = false;

  const isInterlocutor = (interlocutors, id) => (
    interlocutors.length === 2 ? user.userId !== id : true
  );

  if (isLoading) return 'Loading...';

  return (
    dialogs?.length ? (
      <List disablePadding>
        {dialogs.map(({ id, interlocutors, messages }) => {
          const interlocutor = interlocutors.find(({ id: interlocutorId }) => (
            isInterlocutor(interlocutors, interlocutorId)
          ));
          const lastMessage = messages?.[0];
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
    )
  );
}
