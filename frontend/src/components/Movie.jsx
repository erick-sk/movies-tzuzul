import { Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  const { id, title, urlSource, rating, synopsis } = movie;

  return (
    <button onClick={() => navigate(`/movies/${id}`)}>
      <Image src={urlSource} alt={title} />
    </button>
  );
};

export default Movie;
