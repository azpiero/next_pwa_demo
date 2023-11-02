import UserTable from '@/components/userList/userTable';
import { Text, Box, Button, Flex } from '@radix-ui/themes';
import { NextPage } from 'next';
import React from 'react';
import BackButton from './_components/back';
/**
 * Admin権限で見ることのできるユーザ管理ページ
 * TODO: Adminでしか見れないようにする
 * TODO: UserTableのデータをDBから取得する
 * TODO: PageNation
 * TODO: Filter etc...
 * @returns
 */

// deletedはbackend側で弾くかも
export type Role = 'admin' | 'editor' | 'deleted';
export type SampleUserType = {
  name: string;
  email: string;
  role: Role;
  key: number;
};
const sampleUserData: SampleUserType[] = [
  {
    name: 'user1',
    email: 'test@gmail.com',
    role: 'admin',
    key: 1,
  },
  {
    name: 'user2',
    email: 'test2@gmail.com',
    role: 'editor',
    key: 2,
  },
  {
    name: 'user3',
    email: 'test3@gmail.com',
    role: 'deleted',
    key: 3,
  },
];

const UserListPage: NextPage = () => {
  return (
    <Box className='p-4'>
      <Flex className='flex justify-between items-center'>
        <Text>User List Page</Text>
        <BackButton />
      </Flex>
      <UserTable userData={sampleUserData} />
    </Box>
  );
};

export default UserListPage;
