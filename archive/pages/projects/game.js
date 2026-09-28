import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title='Let&apos;s Play'>
            <Container maxW="container.md">
                <ProjectImage
                    src="/images/iosgamelibraryapp.png"
                    alt="Let's Play!" />
                <Title>
                    Let&apos;s Play! <Badge>2021</Badge>
                </Title>
                <P>
                Dicoding&apos;s expert iOS course project.
                Implemented a game library app with a 
                &apos;favorites&apos; feature. Implemented design 
                patterns, clean architectures, modularization. 
                dependency injection with Swinject, and 
                reactive programming with the Combine framework.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>iOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Swift, UIKit</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project