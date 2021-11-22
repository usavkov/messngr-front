import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Table, Button } from 'antd';
import { useQuery } from '@apollo/client';

import { USERS } from '../../GraphQL/queries';
import { columns } from './tableConfig';

export const UsersList = () => {
  const { data, errors, loading } = useQuery(USERS);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const tableData = data?.users?.map(user => ({ key: user.id, ...user }))

  return (
    <Container>
      <Row>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={tableData}
          loading={loading}
        />
      </Row>
    </Container>
  );
};
