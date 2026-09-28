import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title='Ingredients Detector and Recipe Recommender'>
            <Container maxW="container.md">
                <ProjectImage
                    src="/images/millenialfashion.png"
                    alt="Millennial Fashion" />
                <Title>
                    Millennial Fashion <Badge>2021</Badge>
                </Title>
                <P>
                A project that spanned across four different 
                coursework: IF-912 Object Oriented Business 
                Modeling, 
                IF-601 Advanced Software Engineering, 
                IF-602 System Testing and Implementation, 
                IF-926 Web Engineering. Demonstrated end-to-end 
                software engineering practices from requirement 
                gathering, diagramming, user story creation, 
                web app development (using Vue.js as the frontend, 
                Go as the backend, and a MySQL database), testing, 
                and deployment using the Docker platform on a 
                virtual machine.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>

                        <Meta>Stack</Meta>
                        <span>Vue.js, Go, MySQL, Docker</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project