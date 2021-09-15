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
import { useMutation } from "react-query";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import queries from "../queries";
import { Credentials } from "./LoginTypes";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPasswordClick = () => setShowPassword(!showPassword);

  const { isLoading, isError, error, mutate } = useMutation(queries.login);

  const initialValues = { email: "", password: "" };
  const handleSubmit = (values: Credentials) => {
    mutate(values);
  };

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

        {isError && error instanceof Error && (
          <Alert status="error" mt="5">
            <AlertIcon />
            There was an error processing your request
            <br />
            Error: {error.message}
          </Alert>
        )}

        <Button
          type="submit"
          colorScheme="blue"
          isLoading={isLoading}
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
