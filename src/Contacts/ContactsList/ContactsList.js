import { useMemo } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Divider, TextField } from '@mui/material';

import { SearchInput } from '../../common/components'
import { useUsersSearch } from '../../common/hooks'
import { ContactsListItem } from '../ContactsListItem';

export const ContactsList = () => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const { searchUsers, users, isLoading: isSearchLoading } = useUsersSearch();

  const options = useMemo(() => (
    users.map(({ username, ...rest }) => ({
      label: username,
      title: username,
      username,
      ...rest
    }))
  ), [users])

  const renderOption = (props, option) => (
    <ContactsListItem {...props} {...option} />
  );

  const onChange = (user) => history.push({
    pathname: `${url}${user ? ('/' + user?.id) : ''}`,
  })
  
  return (
    <>
      <SearchInput
        id='search-contacts'
        label='Find user'
        searchFn={searchUsers}
        isLoading={isSearchLoading}
        options={options}
        renderOption={renderOption}
        onChange={onChange}
        sx={{
          m: 1,
        }}
      />
      <Divider variant="middle" />
    </>
  )
}
