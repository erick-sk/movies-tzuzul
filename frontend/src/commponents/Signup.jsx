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

const Signup = () => {
  return (
    <Box>
      <Heading m={8} align="center">
        Signup
      </Heading>
      <Container maxW="container.md">
        <form>
          <FormControl>
            <FormLabel htmlFor="name">Your name</FormLabel>
            <Input id="name" type="text" />
            <FormHelperText>We'll never share your name.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="lastName">Your last name</FormLabel>
            <Input id="lastName" type="text" />
            <FormHelperText>We'll never share your last name.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="city">Your city</FormLabel>
            <Input id="city" type="text" />
            <FormHelperText>We'll never share your last city.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="birthday">Your birthday</FormLabel>
            <Input id="birthday" type="date" />
            <FormHelperText>
              We'll never share your last birthday.
            </FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" />
            <FormHelperText>We'll never share your password.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Confirm password</FormLabel>
            <Input id="confirmPassword" type="password" />
            <FormHelperText>We'll never share your password.</FormHelperText>
          </FormControl>

          <Box mt={2} mb={2}>
            <Link to="/signin">Signin</Link>
          </Box>

          <Button mt={2} colorScheme="blue">
            Create account
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Signup;
