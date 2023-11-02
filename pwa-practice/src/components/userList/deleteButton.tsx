'use client';
import Button from '@/components/common/Button';
import { MdDelete } from 'react-icons/md';

const DeleteUserButton = () => {
  return (
    <Button size={'3'}>
      <MdDelete width='32' height='32' />
    </Button>
  );
};
export default DeleteUserButton;
