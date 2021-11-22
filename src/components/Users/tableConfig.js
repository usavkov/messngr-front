import { Dropdown, Button, Menu } from 'antd';
import { DownOutlined, DeleteTwoTone, EditOutlined } from '@ant-design/icons';

const getMenu = (id) => (
  <Menu>
    <Menu.Item key={`${id}-1`} icon={<EditOutlined />}>
      Edit
    </Menu.Item>
    <Menu.Item key={`${id}-0`} icon={<DeleteTwoTone twoToneColor='#ff0000' />}>
      Delete
    </Menu.Item>
  </Menu>
);

export const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Date created',
    dataIndex: 'createdAt',
    render: (date) => new Date(date).toUTCString(),
  },
  {
    title: '',
    dataIndex: 'id',
    render: (id) => (
      <Dropdown trigger='click' overlay={getMenu(id)}>
        <Button>
          Actions <DownOutlined />
        </Button>
      </Dropdown>
    ),
  },
];
