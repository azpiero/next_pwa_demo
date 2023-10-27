'use client';

import type { NextPage } from 'next';
import ProjectCard from '@/components/project/projectCard';
import { Text, Box, Button, Flex, Heading, Grid, GridItem } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

type Project = {
  title: string;
  description: string;
  status: string;
  key: number;
};
const sampleProject: Project[] = [
  {
    title: 'project1',
    description: 'project1の説明',
    status: '実験中',
    key: 1,
  },
  {
    title: 'project2',
    description: 'project2の説明',
    status: '実験完了',
    key: 2,
  },
  {
    title: 'project3',
    description: 'project3の説明',
    status: '公開',
    key: 3,
  },
  {
    title: 'project4',
    description: 'project4の説明',
    status: '実験完了',
    key: 4,
  },
  {
    title: 'project5',
    description: 'project5の説明',
    status: '実験完了',
    key: 5,
  },
  {
    title: 'project6',
    description: 'project6の説明',
    status: '実験完了',
    key: 6,
  },
];

/**
 * メインページ
 * TODO: projectのページネーション
 * TODO: sort / 検索 / フィルター機能
 * TODO: adminユーザのみ新規プロジェクト作成ボタンを表示
 * TODO: adminユーザのみユーザ編集画面への遷移ボタンを表示
 * @returns
 */
const Home: NextPage = () => {
  const router = useRouter();
  const handleCreateProject = () => {
    router.push('/createProject');
  };
  return (
    <Box padding={4}>
      <Flex justify={'space-between'} align='center'>
        <Text as='h1' size='md' noOfLines={1}>
          プロジェクト一覧
        </Text>
        <Button onClick={handleCreateProject}>新規プロジェクト作成</Button>
      </Flex>
      <Box paddingY={4}>
        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
          {sampleProject.map((project) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              status={project.status}
              key={project.key}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
