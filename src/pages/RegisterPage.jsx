import {
  AlertDescription,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useToast } from '@chakra-ui/react';

export default function RegisterPage() {
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      gender: '',
      bod: '',
    },
    onSubmit: values => {
      console.log(values, 'this is from register page');
      toast({
        title: 'Account Created',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    },
  });
  return (
    <>
      <VStack spacing={8}>
        <Text fontSize="4xl">Register Page</Text>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel mt={3} htmlFor="username">
              Username
            </FormLabel>
            <Input
              id="username"
              type="text"
              placeholder={'Your Username'}
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <FormLabel mt={3} htmlFor="email">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              placeholder={'Your Email'}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <FormLabel mt={3} htmlFor="password">
              Password
            </FormLabel>
            <Input
              id="password"
              type="password"
              placeholder={'Your Password'}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <FormLabel mt={3} htmlFor="bod">
              Date of Birth
            </FormLabel>
            <Input
              id="bod"
              type="date"
              value={formik.values.bod}
              onChange={formik.handleChange}
            />
            <FormLabel mt={3} htmlFor="gender">
              Gender
            </FormLabel>
            <Select
              id="gender"
              placeholder="What is your Gender?"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
            </Select>
            <Button mt={5} type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
      </VStack>
    </>
  );
}
