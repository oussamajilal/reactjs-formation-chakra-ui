import * as React from "react";
import { useFormik } from "formik";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { EmailIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/react";
import loginSchema from "./LoginSchema";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPasswordClick = () => setShowPassword(!showPassword);

  const initialValues = { email: "", password: "" };
  const handleSubmit = () => {};

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: loginSchema,
  });

  return (
    <Container w="30%">
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          mb="2"
          isInvalid={!!(formik.touched.email && formik.errors.email)}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input
              type="email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
            />
          </InputGroup>
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl
          mb="2"
          isInvalid={!!(formik.touched.password && formik.errors.password)}
        >
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowPasswordClick}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          loadingText="Connecting"
          w="100%"
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
