'use client';
import { useRouter } from 'next/navigation';
import IconButton from '@/components/common/IconButton';
import { MdSettings } from 'react-icons/md';
const AdminButton = () => {
  const router = useRouter();
  const handleMoveUserList = () => {
    router.push('/userList');
  };
  return (
    <IconButton onClick={handleMoveUserList} size={'3'}>
      <MdSettings width='32' height='32' />
    </IconButton>
  );
};

export default AdminButton;
