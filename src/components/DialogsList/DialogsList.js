import { List } from '@mui/material';
import { useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

import { useAuth, useUserDialogs } from '../../common/hooks'

import { DialogsListItem } from './DialogsListItem';

export const DialogsList = () => {
  const { user } = useAuth();
  const { dialogs } = useUserDialogs();
  const { pathname } = useLocation();
  const { url } = useRouteMatch();

  console.log(url);

  const activeDialog = pathname.match(new RegExp(`${url}\/(.+)\/?`))?.[1];

  console.log(activeDialog);

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
        const isCurrentUser = user.userId === interlocutor.id;

        return (
          lastMessage && (
            <DialogsListItem
              {...interlocutor}
              key={id}
              id={id}
              activeDialog={activeDialog}
              lastMessage={lastMessage}
              isCurrentUser={isCurrentUser}
            />
          )
        )
      })}
    </List>
  )
};
