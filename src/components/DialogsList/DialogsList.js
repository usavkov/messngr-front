import { List } from '@mui/material';

import { useUserDialogs } from '../../common/hooks'
import { useAuth } from "../../utils";

import { DialogsListItem } from './DialogsListItem';

export const DialogsList = () => {
  const { user } = useAuth();
  const { dialogs } = useUserDialogs();

  return (
    <List disablePadding>
      {dialogs?.map(({ id, interlocutors, messages }) => {
        const interlocutor = interlocutors.find(
          ({ id: interlocutorId }) => (
            interlocutors.length === 2
              ? user.userId !== interlocutorId
              : user.userId === interlocutorId
          )
        );
        const lastMessage = messages[0]?.content;

        console.log(interlocutor);

        return (
          lastMessage && (
            <DialogsListItem
              key={id}
              id={id}
              lastMessage={lastMessage}
              {...interlocutor}
            />
          )
        )
      })}
    </List>
  )
};
