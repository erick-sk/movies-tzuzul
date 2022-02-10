import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';

const SignIn = () => {
  return (
    <Box minH="100vh" bg="gray.100">
      <Heading py={8} align="center">
        Sign In
      </Heading>
      <Container maxW="container.sm">
        <form>
          <FormControl mb={4}>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              outlineColor="blue.300"
              focusBorderColor="none"
              id="email"
              type="email"
              placeholder="your email"
            />
          </FormControl>

          <FormControl mb={6}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              outlineColor="blue.300"
              focusBorderColor="none"
              id="password"
              type="password"
              placeholder="your password"
            />
          </FormControl>

          <Button mb={4} w="100%" colorScheme="blue">
            Sign In
          </Button>

          <Stack direction={['column', 'row']} lineHeight={0.5}>
            <Text>Don't have an account?</Text>
            <Text
              fontWeight="bold"
              _hover={{
                color: 'blue.500',
              }}
            >
              <Link to="/signup">Create an account!</Link>
            </Text>
          </Stack>
        </form>
      </Container>
    </Box>
  );
};

export default SignIn;
