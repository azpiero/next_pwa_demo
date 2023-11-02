'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';

const BackButton = () => {
  const router = useRouter();
  const handleBackPage = () => {
    router.back();
  };
  return <Button onClick={handleBackPage}>戻る</Button>;
};

export default BackButton;
