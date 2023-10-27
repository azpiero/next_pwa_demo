'use client';

import { Box, Flex, Heading, Button, IconButton, Grid } from '@chakra-ui/react';
import { MdSettings, MdPerson } from 'react-icons/md';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const handleMoveUserList = () => {
    router.push('/userList');
  };
  return (
    <Box as='header'>
      <Flex
        bg='white'
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle='solid'
        borderColor='gray.200'
        align='center'
      >
        <Flex flex={1} justify='space-between' align='center'>
          <Heading as='h1' size='lg' noOfLines={1}>
            <NextLink href='/'>実験管理サイト(仮)</NextLink>
          </Heading>
          <Box>
            <IconButton aria-label='admin' onClick={handleMoveUserList} marginRight={4}>
              <MdSettings />
            </IconButton>
            <Button leftIcon={<MdPerson />} fontSize='sm' fontWeight={600} color='white' bg='orange.400'>
              ユーザ情報
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
