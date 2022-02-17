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
                    src="/images/ingredients-detector-recipe-recommender.png"
                    alt="Ingredients Detector and Recipe Recommender" />
                <Title>
                    Ingredients Detector and Recipe Recommender <Badge>2020</Badge>
                </Title>
                <P>
                    This multi-platform application recommend
                    recipes based on ingredients you own by
                    performing a detection algorithm on your image.
                    I, along with a two teammates (Natasha and Rizvan)
                    implemented two models, a classification model
                    with a pre-trained backbone of Xception and the
                    state-of-the-art real-time object detection
                    algorithm You Only Look Once version 3 (YOLOv3),
                    training to a dataset gathered from Open Images
                    Dataset V6+. Furthermore, a multi-platform app was
                    devised using Flutter to capture images and display
                    recipe recommendations. This app calls to a backend
                    API built using the Django web framework and
                    deployed on Google Cloud Platform. Our project was
                    selected as one of the best projects of Bangkit
                    Academy by Google 2020, featured on the Google
                    blog and Google Indonesia Youtube Channel.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android/iOS</span>
                    </ListItem>
                    <ListItem>

                        <Meta>Stack</Meta>
                        <span>Flutter, Tensorflow, Django</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blog Post</Meta>
                        <Link href="https://indonesia.googleblog.com/2020/09/empat-ide-terbaik-dari-peserta-bangkit.html">
                        https://indonesia.googleblog.com/2020/09/empat-ide-terbaik-dari-peserta-bangkit.html
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>YouTube feature</Meta>
                        <Link href="https://www.youtube.com/watch?v=L5XKrcvcSN4&t=2818s">
                            https://www.youtube.com/watch?v=L5XKrcvcSN4&t=2818s
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project