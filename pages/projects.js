import { Container, Box, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import { ProjectGridItem } from '../components/grid-item'
import Section from '../components/section'
import thumbCooksnap from '../public/images/cooksnap.png'

const Projects = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <ProjectGridItem id="ingredients-detector" title="Ingredients Detector and Recipe Recommender " thumbnail={thumbCooksnap}>
                        An Ingredients Detector and Recipe Recommender app developed as part of Bangkit Academy
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects