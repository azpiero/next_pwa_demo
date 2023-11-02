import { NextPage } from 'next';
import React from 'react';
import { Flex, Text, Button } from '@radix-ui/themes';
import BackButton from './_components/backButton';

const CreateProjectPage: NextPage = () => {
  return (
    <div className='p-4'>
      <Flex className='flex justify-between items-center'>
        <Text>Create Project Page</Text>
        <BackButton />
      </Flex>
    </div>
  );
};

export default CreateProjectPage;
