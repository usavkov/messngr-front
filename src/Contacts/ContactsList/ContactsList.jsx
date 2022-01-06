import { useMemo } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Divider } from '@mui/material';

import { SearchInput } from '../../common/components';
import { useUsersSearch } from '../../common/hooks';
import { ContactsListItem } from '../ContactsListItem';

export function ContactsList() {
  const history = useHistory();
  const { url } = useRouteMatch();
  const { searchUsers, users, isLoading: isSearchLoading } = useUsersSearch();

  const options = useMemo(
    () =>
      users.map(({ username, ...rest }) => ({
        label: username,
        title: username,
        username,
        ...rest,
      })),
    [users]
  );

  const renderOption = (props, option) => <ContactsListItem {...props} {...option} />;

  const onChange = (user) =>
    history.push({
      pathname: `${url}${user ? `/${user?.id}` : ''}`,
    });

  return (
    <>
      <SearchInput
        id="search-contacts"
        isLoading={isSearchLoading}
        options={options}
        onChange={onChange}
        label="Find user"
        renderOption={renderOption}
        searchFn={searchUsers}
        size="small"
        sx={{
          m: 1,
        }}
      />
      <Divider variant="middle" />
    </>
  );
}
