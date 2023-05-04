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
import ProjectLayout from '../../components/Project/ProjectLayout'

const Project = () => {
  return (
    <ProjectLayout
      title="Ingredients Detector and Recipe Recommender"
      details={[
        <ProjectDetail key="year" title="Year" content="2021" />,
        <ProjectDetail
          key="stack"
          title="Stack"
          content="Flutter, Tensorflow, Django"
        />,
        <ProjectDetail
          key="year"
          title="Blog Post"
          content={
            <Link href="https://indonesia.googleblog.com/2020/09/empat-ide-terbaik-dari-peserta-bangkit.html">
              https://indonesia.googleblog.com/2020/09/empat-ide-terbaik-dari-peserta-bangkit.html
            </Link>
          }
        />
      ]}
      description="
              This multi-platform application recommend recipes based on
              ingredients you own by performing a detection algorithm on your
              image. I, along with a two teammates (Natasha and Rizvan)
              implemented two models, a classification model with a pre-trained
              backbone of Xception and the state-of-the-art real-time object
              detection algorithm You Only Look Once version 3 (YOLOv3),
              training to a dataset gathered from Open Images Dataset V6+.
              Furthermore, a multi-platform app was devised using Flutter to
              capture images and display recipe recommendations. This app calls
              to a backend API built using the Django web framework and deployed
              on Google Cloud Platform. Our project was selected as one of the
              best projects of Bangkit Academy by Google 2020, featured on the
              Google blog and Google Indonesia Youtube Channel."
    >
      <Flex direction={'column'} maxW="container.xl" alignItems={'center'}>
        <Image
          src="/images/ingredients-detector-recipe-recommender.png"
          alt="Recipe"
        />
      </Flex>
    </ProjectLayout>
  )
}

export default Project
