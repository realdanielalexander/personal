import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Grid,
  GridItem,
  Text,
  Heading,
  Flex,
  Image,
  useBreakpointValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ProjectImage, Meta, TitleSection } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Title from '../../components/title'
import ProjectDetail from '../../components/Project/ProjectDetail'

const ProjectLayout = ({ title, details, description, children }) => {
  const gridBreakpoints = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    lg: 'repeat(2, 1fr)'
  })
  return (
    <Layout title={title}>
      <Flex
        direction={'column'}
        maxW="container.xl"
        minH={'100vh'}
        justifyContent="center"
        alignItems={'center'}
        style={{ marginTop: 32 }}
      >
        <Grid templateColumns={gridBreakpoints} gap={16}>
          <GridItem w="100%">
            <TitleSection>
              <Title>{title}</Title>
              <List my={4}>{details}</List>
            </TitleSection>
          </GridItem>
          <GridItem>
            <P>{description}</P>
          </GridItem>
        </Grid>
      </Flex>
      <Flex direction={'column'} maxW="container.xl" alignItems={'center'}>
        {children}
      </Flex>
    </Layout>
  )
}

export default ProjectLayout
