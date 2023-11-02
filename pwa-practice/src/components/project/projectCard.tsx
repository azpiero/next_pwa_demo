import { Text, Box, Card, Heading } from '@radix-ui/themes';

/**
 * project一覧画面に表示されるカードの見た目
 * props: projectTitle, projectDescription, projectStatus
 * TODO: 将来的に statusはStatus型を作成して対応する
 * @returns
 */
const ProjectCard = ({ title, description, status }: { title: string; description: string; status: string }) => {
  return (
    <Card>
      <Box>
        <Heading> {title}</Heading>
      </Box>

      <Box>
        <Box>
          <Box>
            <Heading>{status}</Heading>
            <Text>{description}</Text>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProjectCard;
