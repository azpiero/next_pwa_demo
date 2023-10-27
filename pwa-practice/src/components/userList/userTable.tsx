import { SampleUserType } from '@/app/userList/page';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

const UserTable = ({ userData }: { userData: SampleUserType[] }) => {
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>ユーザ名</Th>
            <Th>メールアドレス</Th>
            <Th>権限</Th>
            <Th>ユーザ消去</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userData.map((user) => (
            <Tr key={user.key}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.role}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
