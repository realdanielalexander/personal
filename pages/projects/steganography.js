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
                    src="/images/steganography.png"
                    alt="Let's Play!" />
                <Title>
                    Least Significant Bit Steganography <Badge>2019</Badge>
                </Title>
                <P>
                Steganography is the practice of concealing a 
                message within another medium of communication. 
                This Python application encodes/decodes your input 
                string to/from a selected image using two methods, 
                Sequential Least Significant Bit and Random Least 
                Significant Bit. Along with that, a GUI was made 
                to facilitate image and message showing using the 
                standard Python GUI toolkit, TKinter.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, TKinter, Pillow</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project