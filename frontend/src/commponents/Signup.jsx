import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

const SignUp = () => {
  return (
    <Box minH="100vh" bg="gray.100" pb={8}>
      <Heading py={8} align="center">
        Sign Up
      </Heading>
      <Container maxW="container.sm">
        <form>
          <FormControl mb={4}>
            <FormLabel htmlFor="firstName">Your first name</FormLabel>
            <Input
              outlineColor="blue.300"
              focusBorderColor="none"
              placeholder="your first name"
              id="firstName"
              type="text"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="lastName">Your last name</FormLabel>
            <Input
              outlineColor="blue.300"
              focusBorderColor="none"
              placeholder="your last name"
              id="lastName"
              type="text"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="city">Your city</FormLabel>
            <Input
              outlineColor="blue.300"
              focusBorderColor="none"
              placeholder="your city"
              id="city"
              type="text"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="birthday">Your birthday</FormLabel>
            <Input
              outlineColor="blue.300"
              focusBorderColor="none"
              id="birthday"
              type="date"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              outlineColor="blue.300"
              focusBorderColor="none"
              placeholder="your email"
              id="email"
              type="email"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              outlineColor="blue.300"
              focusBorderColor="none"
              placeholder="your password"
              id="password"
              type="password"
            />
          </FormControl>

          <FormControl mb={6}>
            <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
            <Input
              outlineColor="blue.300"
              focusBorderColor="none"
              placeholder="Confirm your password"
              id="confirmPassword"
              type="password"
            />
          </FormControl>

          <Button mb={4} w="100%" colorScheme="blue">
            Sing Up
          </Button>

          <Stack direction={['column', 'row']} lineHeight={0.5}>
            <Text>Already have an account?</Text>
            <Text
              fontWeight="bold"
              _hover={{
                color: 'blue.500',
              }}
            >
              <Link to="/signin">Log In!</Link>
            </Text>
          </Stack>
        </form>
      </Container>
    </Box>
  );
};

export default SignUp;
