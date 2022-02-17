import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Text,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container mt={8}>
            <Heading as="h1">Sorry!</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={8}/>

            <Box my={8}>
                <NextLink href="/">
                    <Button colorScheme="teal">
                        Return to Home
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound