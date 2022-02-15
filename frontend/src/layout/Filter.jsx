import { Box, Container, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Filter = () => {
  return (
    <Box bg="gray.200">
      <Container py={2} maxW={['container.lg', null, null, 'container.xl']}>
        <Flex>
          <Box
            as="p"
            fontWeight="bold"
            fontSize="xl"
            mr="8"
            _hover={{
              color: 'gray.500',
            }}
          >
            <Link to="/movies">Movies</Link>
          </Box>

          <Box
            as="p"
            fontWeight="bold"
            fontSize="xl"
            mr="8"
            _hover={{
              color: 'gray.500',
            }}
          >
            <Link to="#">Popular</Link>
          </Box>

          <Box
            as="p"
            fontWeight="bold"
            fontSize="xl"
            _hover={{
              color: 'gray.500',
            }}
          >
            <Link to="#">Top 10</Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Filter;
