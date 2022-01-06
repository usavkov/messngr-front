import { useQuery } from '@apollo/client';
import { useState } from 'react';

import { GET_ALL_USERS } from '../../GraphQL/queries';

import { columns } from './tableConfig';

export function UsersList() {
  const { data, errors, loading } = useQuery(GET_ALL_USERS);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const tableData = data?.users?.map(user => ({ key: user.id, ...user }));

  return (
    <>Hi, users</>
  );
}
