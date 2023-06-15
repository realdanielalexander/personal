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
      title="Convolutional Neural Network for Semantic Segmentation of Bandung Urban Scenes"
      details={[
        <ProjectDetail
          key="creators"
          title="Creators"
          content="Daniel Alexander, Hans Christian Kurniawan, Irfin Afifudin, Hery Heryanto"
        />,
        <ProjectDetail
          key="paper"
          title="Paper"
          content={
            <Link href="https://ieeexplore.ieee.org/document/9972006">
              IEEE Xplore
            </Link>
          }
        />,
        <ProjectDetail
          key="details"
          title="Details"
          content="Accepted to the International Conference on Data and Software Engineering 2022"
        />
      ]}
      description="
      Semantic segmentation is the process of classifying 
      each pixel in an image into one of the predesignated classes. 
      In its application for self-driving systems, semantic 
      segmentation is used to identify objects and road conditions 
      to make the right control decisions. This work uses the 
      convolutional neural network method to perform semantic 
      segmentation with the DeepLabV3+ architecture. Object of 
      study is the urban scene dataset called Bandung Cityscapes 
      collected around the city of Bandung, West Java, Indonesia 
      and annotated by hand. Architecture testing is performed by 
      combining the values of epoch, learning rate, and number of 
      convolution filters to find the best mean intersection over 
      union accuracy. The most optimal model achieved the highest 
      average accuracy of 77.431% on the validation set, attained by 
      the model with 128 convolutional filters, trained with 300 
      epochs and 0.0001 (10– 4 ) learning rate. This model 
      maintained an average training accuracy of 87.194%, average 
      validation accuracy of 75.274%, and average difference between 
      the two of 11.919% throughout the training process."
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
