'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';

const CreateProjectButton = () => {
  const router = useRouter();
  const handleMoveUserList = () => {
    router.push('/createProject');
  };
  return (
    <Button onClick={handleMoveUserList} size={'3'}>
      新規プロジェクトの作成
    </Button>
  );
};

export default CreateProjectButton;
