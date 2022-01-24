import { Divider } from '@mui/material';

import { useAuth, useDialogSearch } from '../../common/hooks';
import { DialogsFilter } from '../DialogsFilter';
import { DialogsList } from '../DialogsList';

export function DialogsPane() {
  const { user } = useAuth();
  const { dialogs, searchDialog, isLoading } = useDialogSearch();

  // const activeDialog = pathname.match(new RegExp(`${url}\/(.+)\/?`))?.[1];
  const activeDialog = false;

  const getInterlocutor = (interlocutors, id) => (
    interlocutors.length === 2 ? user.userId !== id : user.userId === id
  );

  return (
    <>
      <DialogsFilter
        dialogs={dialogs}
        isLoading={isLoading}
        searchFn={searchDialog}
      />

      <Divider variant="middle" />

      <DialogsList
        dialogs={dialogs}
        isLoading={isLoading}
      />
    </>
  );
}
