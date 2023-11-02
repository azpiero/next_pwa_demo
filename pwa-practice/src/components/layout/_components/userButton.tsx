'use client';
import Button from '@/components/common/Button';
import { MdPerson } from 'react-icons/md';
import { useSession, signIn, signOut } from 'next-auth/react';
import * as Popover from '@radix-ui/react-popover';
import { Heading, Text, Flex } from '@radix-ui/themes';
import { MouseEvent } from 'react';

const UserButton = () => {
  const { data: session } = useSession();
  const handleSignout = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event?.stopPropagation();
    signOut();
  };
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Flex className='justify-center content-center bg-green100 rounded-lg p-2'>
          <MdPerson className='text-white place-self-center h-6 w-6' />
          <Text className='IconButton text-white' aria-label='Update dimensions'>
            {session?.user?.name ?? 'Guest'}
          </Text>
        </Flex>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content style={{ width: 150 }}>
          <Flex className='justify-center content-center flex-col p-2 bg-white border-2 border-slate-50 gap-1'>
            <Text style={{ color: 'black' }}>ユーザ設定</Text>
            <Button onClick={(event) => handleSignout(event)}>ログアウト</Button>
          </Flex>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
export default UserButton;
