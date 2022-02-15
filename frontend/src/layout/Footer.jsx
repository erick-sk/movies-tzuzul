import { Box, Container, Spacer, Heading, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box as="footer" bg="black" pt={5} pb={5} color="white">
      <Container maxW={['container.lg', null, null, 'container.xl']}>
        <Flex>
          <Heading fontWeight="normal" size="lg">
            <Link to="/">
              Movies
              <Box as="span" fontWeight="bold">
                Now
              </Box>
            </Link>
          </Heading>

          <Spacer />

          <Box>
            <Text>&copy; All rights reserved </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
