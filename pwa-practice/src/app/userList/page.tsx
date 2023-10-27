'use client';

import UserTable from '@/components/userList/userTable';
import { Text, Box, Button, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React from 'react';

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
export type SampleUserData = {
  name: string;
  email: string;
  role: Role;
  key: number;
};
const sampleUserData: SampleUserData[] = [
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
  const router = useRouter();
  const handleBackPage = () => {
    router.back();
  };
  return (
    <Box padding={4}>
      <Flex justify={'space-between'} align='center'>
        <Text>User List Page</Text>
        <Button onClick={handleBackPage}>戻る</Button>
      </Flex>
      <UserTable userData={sampleUserData} />
    </Box>
  );
};

export default UserListPage;
