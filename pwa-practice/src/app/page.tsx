import type { NextPage } from 'next';
import ProjectCard from '@/components/project/projectCard';
import { Text, Box, Button, Flex, Heading, Grid } from '@radix-ui/themes';
import CreateProjectButton from './_compoents/createProjectButton';

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
  return (
    <Box className='p-4'>
      <Flex className='flex justify-between items-center'>
        <Text>プロジェクト一覧</Text>
        <CreateProjectButton />
      </Flex>
      <Box className='pt-4'>
        <Grid columns='3' gap='4' width='auto'>
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
