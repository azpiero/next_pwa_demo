'use client';

import { Text, Box, Button, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React from 'react';

const CreateProjectPage: NextPage = () => {
  const router = useRouter();
  const handleBackPage = () => {
    router.back();
  };
  return (
    <Box padding={4}>
      <Flex justify={'space-between'} align='center'>
        <Text>Create Project Page</Text>
        <Button onClick={handleBackPage}>戻る</Button>
      </Flex>
    </Box>
  );
};

export default CreateProjectPage;
