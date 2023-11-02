'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';

/**
 * 同じ実装があるのでrouterbackが共通なら共通化した方が良い
 * @returns
 */
const BackButton = () => {
  const router = useRouter();
  const handleBackPage = () => {
    router.back();
  };
  return <Button onClick={handleBackPage}>戻る</Button>;
};

export default BackButton;
