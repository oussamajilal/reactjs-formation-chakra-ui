import * as React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/alert";

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = (props) => (
  <Alert
    status="error"
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    height="200px"
  >
    <AlertIcon boxSize="40px" mr={0} />
    <AlertTitle mt={4} mb={1} fontSize="lg">
      An error occurred
    </AlertTitle>
    <AlertDescription maxWidth="sm">
      Could not fetch data from the server!
      <br />
      Error: {props.message}
    </AlertDescription>
  </Alert>
);

export default ErrorAlert;
