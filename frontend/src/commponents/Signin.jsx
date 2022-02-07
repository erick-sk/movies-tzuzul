import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Heading,
} from '@chakra-ui/react';

const Signin = () => {
  return (
    <Box>
      <Heading m={8} align="center">
        Signin
      </Heading>
      <Container maxW="container.md">
        <form>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Password</FormLabel>
            <Input id="email" type="password" />
            <FormHelperText>We'll never share your password.</FormHelperText>
          </FormControl>

          <Box mt={2} mb={2}>
            <Link to="/signup">Create an account!</Link>
          </Box>

          <Button mt={2} colorScheme="blue">
            Login
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Signin;
