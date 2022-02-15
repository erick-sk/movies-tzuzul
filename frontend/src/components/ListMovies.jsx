import Movie from './Movie';
import { Box, Container, SimpleGrid } from '@chakra-ui/react';

const ListMovies = () => {
  const movies = [
    {
      id: 1,
      title: 'Spiderman',
      date: '20-05-2021',
      synopsis: 'lorem ipsum loren ipsum ok loren ipsum ok loren ipsum ok',
      urlSource:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Spiderman.JPG/1200px-Spiderman.jpg',
      rating: '4',
    },
    {
      id: 2,
      title: 'Spiderman',
      date: '20-05-2021',
      synopsis: 'lorem ipsum loren ipsum ok loren ipsum ok loren ipsum ok',
      urlSource:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Spiderman.JPG/1200px-Spiderman.jpg',
      rating: '4',
    },
    {
      id: 3,
      title: 'Spiderman',
      date: '20-05-2021',
      synopsis: 'lorem ipsum loren ipsum ok loren ipsum ok loren ipsum ok',
      urlSource:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Spiderman.JPG/1200px-Spiderman.jpg',
      rating: '4',
    },
    {
      id: 4,
      title: 'Spiderman',
      date: '20-05-2021',
      synopsis: 'lorem ipsum loren ipsum ok loren ipsum ok loren ipsum ok',
      urlSource:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Spiderman.JPG/1200px-Spiderman.jpg',
      rating: '4',
    },
    {
      id: 5,
      title: 'Spiderman',
      date: '20-05-2021',
      synopsis: 'lorem ipsum loren ipsum ok loren ipsum ok loren ipsum ok',
      urlSource:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Spiderman.JPG/1200px-Spiderman.jpg',
      rating: '4',
    },
    {
      id: 6,
      title: 'Spiderman',
      date: '20-05-2021',
      synopsis: 'lorem ipsum loren ipsum ok loren ipsum ok loren ipsum ok',
      urlSource:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Spiderman.JPG/1200px-Spiderman.jpg',
      rating: '4',
    },
  ];

  return (
    <Container maxW={['container.lg', null, null, 'container.xl']} mb={4}>
      <SimpleGrid columns={[2, null, 3, 4]} spacing="40px">
        {movies.map((movie) => (
          <Box w="100%" height="auto" key={movie.id}>
            <Movie movie={movie} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ListMovies;
