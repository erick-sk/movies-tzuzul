import { Box, Container, Spacer, Heading, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box bg="blue.800" pt={5} pb={5} color="white">
      <Container maxW={['container.lg', null, null, 'container.xl']}>
        <Flex align="center">
          <Heading fontWeight="normal" size="lg">
            <Link to="/">
              Movies
              <Box as="span" fontWeight="bold">
                Now
              </Box>
            </Link>
          </Heading>

          <Spacer />

          <Box mr={3}>
            <Text>
              Welcome{' '}
              <Box as="span" fontWeight="bold">
                User!
              </Box>
            </Text>
          </Box>

          <Box mr={3}>
            <Text as="u">
              <Link to="/signin">Sign In</Link>
            </Text>
          </Box>

          <Box>
            <Text as="u">
              <Link to="/signup">Sign Up</Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
