import { Container, Box, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import { ProjectGridItem } from '../components/grid-item'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import thumbCooksnap from '../public/images/cooksnap.png'

const Projects = () => {
    return (
        <Container  maxW="container.md">
            <Heading as="h3" fontSize={20} mb={8} variant="section-title">
                Gallery
            </Heading>
            <Paragraph>
            Taking photos and editing them has been
            one of the favorite pastimes of mine.
            Below you can find some of my work.
            </Paragraph>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <ProjectGridItem id="ingredients-detector" title="Los Angeles, CA" thumbnail={thumbCooksnap}>
                        An Ingredients Detector and Recipe Recommender app developed as part of Bangkit Academy
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects