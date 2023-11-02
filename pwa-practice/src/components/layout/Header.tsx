import { Box, Flex, Heading } from '@radix-ui/themes';
import NextLink from 'next/link';
import UserButton from './_components/userButton';
import AdminButton from './_components/adminButton';

/**
 * Headerのlayoutコンポーネント
 * @returns
 */
export default function Header() {
  return (
    <Box className='flex p-4 bg-bg h-20 border-b-2 border-gray300 justify-between items-center'>
      <Heading size='6' className='truncate'>
        <NextLink href='/'>実験管理サイト(仮)</NextLink>
      </Heading>
      <Flex gap={'2'}>
        <AdminButton />
        <UserButton />
      </Flex>
    </Box>
  );
}
