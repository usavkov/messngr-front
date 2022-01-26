import { Divider } from '@mui/material';

import { useAuth, useDialogSearch, useUserDialogs } from '../../common/hooks';
import { DialogsFilter } from '../DialogsFilter';
import { DialogsList } from '../DialogsList';

export function DialogsPane() {
  const { user } = useAuth();
  const { dialogs, searchDialogs, isLoading } = useDialogSearch();

  // const activeDialog = pathname.match(new RegExp(`${url}\/(.+)\/?`))?.[1];
  const activeDialog = false;

  return (
    <>
      <DialogsFilter
        dialogs={dialogs}
        isLoading={isLoading}
        searchFn={searchDialogs}
      />

      <Divider variant="middle" />

      <DialogsList
        dialogs={dialogs}
        isLoading={isLoading}
      />
    </>
  );
}
