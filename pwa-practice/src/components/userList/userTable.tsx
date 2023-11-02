import { SampleUserType } from '@/app/userList/page';
import { Table } from '@radix-ui/themes';
import DeleteUserButton from './deleteButton';

const UserTable = ({ userData }: { userData: SampleUserType[] }) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>ユーザ名</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>アドレス</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>権限</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>ユーザ削除</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {userData.map((user) => (
          <Table.Row key={user.key}>
            <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.role}</Table.Cell>
            <Table.Cell>
              <DeleteUserButton />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default UserTable;
