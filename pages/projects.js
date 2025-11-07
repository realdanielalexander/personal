import GridLayout from '../components/layouts/grid'
import GridItemComponent from '../components/GridItem'
import { useRouter } from 'next/router'

const ProjectsPage = () => {
  const router = useRouter()
  
  const gridItems = [
    // Header Item - 100%
    <GridItemComponent
      key="header"
      width="100%"
      flex="1 1 100%"
      heading="Projects"
      description="A collection of my work and experiments."
      headingFontSize="28px"
      headingLetterSpacing="2px"
      showHeading={false}
    />,
    
    // Project 1 - 40%
    <GridItemComponent
      key="project1"
      width={{ base: "100%", md: "100%", lg: "40%" }}
      flex={{ base: "1 1 100%", md: "1 1 100%", lg: "2 1 40%" }}
      heading="Game Project"
      description="An interactive web-based game with modern graphics."
      href="/projects/game"
    />,
    
    // Project 2 - 20%
    <GridItemComponent
      key="project2"
      width={{ base: "100%", md: "calc(50% - 12px)", lg: "20%" }}
      flex={{ base: "1 1 100%", md: "0 0 calc(50% - 12px)", lg: "1 1 20%" }}
      heading="Web App"
      description="A responsive web application."
      href="/projects/webapp"
    />,
    
    // Project 3 - 20%
    <GridItemComponent
      key="project3"
      width={{ base: "100%", md: "calc(50% - 12px)", lg: "20%" }}
      flex={{ base: "1 1 100%", md: "0 0 calc(50% - 12px)", lg: "1 1 20%" }}
      heading="Mobile App"
      description="Cross-platform mobile application."
      href="/projects/mobile"
    />,
    
    // Project 4 - 20%
    <GridItemComponent
      key="project4"
      width={{ base: "100%", md: "calc(50% - 12px)", lg: "20%" }}
      flex={{ base: "1 1 100%", md: "0 0 calc(50% - 12px)", lg: "1 1 20%" }}
      heading="API Service"
      description="Backend API with database integration."
      href="/projects/api"
    />,
    
    // Large Project - 80%
    <GridItemComponent
      key="largeProject"
      width={{ base: "100%", md: "100%", lg: "80%" }}
      flex={{ base: "1 1 100%", md: "1 1 100%", lg: "4 1 80%" }}
      heading="Full Stack Platform"
      description="A comprehensive platform with frontend, backend, and database components."
      href="/projects/platform"
    />,
    
    // Back to Home - 20%
    <GridItemComponent
      key="backHome"
      width={{ base: "100%", md: "calc(50% - 12px)", lg: "20%" }}
      flex={{ base: "1 1 100%", md: "0 0 calc(50% - 12px)", lg: "1 1 20%" }}
      heading="Back Home"
      description="Return to the main page."
      href="/"
    />
  ]
  
  return (
    <GridLayout title="Projects" gridItems={gridItems}>
    </GridLayout>
  )
}

export default ProjectsPage 