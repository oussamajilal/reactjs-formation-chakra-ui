import * as React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";
import NewClientForm from "./NewClientForm";
import { useFormik } from "formik";
import { Client } from "./Client";
import NewClientSchema from "./NewClientSchema";
import queries from "../queries";
import { useMutation } from "react-query";
import { Alert, AlertIcon } from "@chakra-ui/alert";

interface NewClientModalProps {
  isOpen: boolean;
  onClose(): void;
  handleSubmit: Function;
}

const NewClientModal: React.FC<NewClientModalProps> = (props) => {
  const { isLoading, isError, error, mutate } = useMutation(
    queries.createClient,
    { retry: 3 }
  );

  const initialValues: Client = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    height: 70.2,
    isActive: true,
  };

  const handleSubmit = async (values: Client) => {
    mutate(values, {
      onSuccess: () => {
        props.handleSubmit(values);
        props.onClose();
      },
    });
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: NewClientSchema,
  });

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={formik.handleSubmit} data-testid="new-client-form">
          <ModalHeader>New Client</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewClientForm formik={formik} />

            {isError && error instanceof Error && (
              <Alert status="error" mt="5">
                <AlertIcon />
                There was an error processing your request
                <br />
                Error: {error.message}
              </Alert>
            )}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr="3" onClick={props.onClose}>
              Cancel
            </Button>
            <Button
              data-testid="newclient-form-submit"
              type="submit"
              colorScheme="blue"
              isLoading={isLoading}
              loadingText="Creating"
            >
              Add
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
export default NewClientModal;
