import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useToast } from '@chakra-ui/react';

export default function LoginPage() {
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values, 'formik login');
      toast({
        title: 'Logging in',
        description: 'You are successfully logged in',
        status: 'success',
        duration: 4000,
        isCloseable: true,
      });
    },
  });
  return (
    <>
      <VStack spacing={8}>
        <Text fontSize="4xl">Login Page</Text>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="usernameLogin">Username</FormLabel>
            <Input
              id="username"
              type="text"
              values={formik.values.username}
              onChange={formik.handleChange}
            />
            <FormLabel mt={5} htmlFor="passwordLogin">
              Password
            </FormLabel>
            <Input
              id="password"
              type="password"
              values={formik.values.password}
              onChange={formik.handleChange}
            />
            <Button mt={5} type="submit">
              Login!
            </Button>
          </FormControl>
        </form>
      </VStack>
    </>
  );
}
