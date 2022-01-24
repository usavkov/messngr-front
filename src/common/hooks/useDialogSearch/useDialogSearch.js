import { useLazyQuery } from '@apollo/client';

import { SEARCH_DIALOGS } from '../../../GraphQL/queries';

export const useDialogSearch = (options) => {
  const [searchDialog, { data, loading, ...rest }] = useLazyQuery(SEARCH_DIALOGS, options);

  return {
    searchDialog,
    isLoading: loading,
    dialogs: data?.searchDialogs ?? [],
    ...rest,
  };
};
