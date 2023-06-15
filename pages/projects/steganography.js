import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Flex,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import ProjectLayout from '../../components/Project/ProjectLayout'
import ProjectDetail from '../../components/Project/ProjectDetail'

const Project = () => {
  return (
    <ProjectLayout
      title="Least Significant Bit Steganography"
      details={[
        <ProjectDetail key="year" title="Year" content="2021" />,
        <ProjectDetail key="stack" title="Stack" content="Python" />,
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
      Steganography is the practice of concealing a 
                message within another medium of communication. 
                This Python application encodes/decodes your input 
                string to/from a selected image using two methods, 
                Sequential Least Significant Bit and Random Least 
                Significant Bit. Along with that, a GUI was made 
                to facilitate image and message showing using the 
                standard Python GUI toolkit, TKinter."
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
