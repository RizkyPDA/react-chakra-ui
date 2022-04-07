import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Form, useFormik } from 'formik';

export default function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      gender: '',
      bod: '',
    },
    onSubmit: values => {
      console.log(values, 'ini dari on submit formik');
    },
  });
  return (
    <>
      <VStack>
        <Text>Register Page</Text>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel mt={3} htmlFor="username">
              Username
            </FormLabel>
            <Input
              id="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <FormLabel mt={3} htmlFor="email">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <FormLabel mt={3} htmlFor="password">
              Password
            </FormLabel>
            <Input
              id="password"
              type="password"
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
              placeholder="Input your Gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <option>Male</option>
              <option>Female</option>
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
