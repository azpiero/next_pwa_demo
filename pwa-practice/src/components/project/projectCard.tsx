import { Text, Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider } from '@chakra-ui/react';

/**
 * project一覧画面に表示されるカードの見た目
 * props: projectTitle, projectDescription, projectStatus
 * TODO: 将来的に statusはStatus型を作成して対応する
 * @returns
 */
const ProjectCard = ({ title, description, status }: { title: string; description: string; status: string }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'> {title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              {status}
            </Heading>
            <Text pt='2' fontSize='sm'>
              {description}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
