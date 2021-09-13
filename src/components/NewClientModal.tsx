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

interface NewClientModalProps {
  isOpen: boolean;
  onClose(): void;
}

const NewClientModal: React.FC<NewClientModalProps> = (props) => {
  const initialValues = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    height: '70.2',
    isActive: true,
  };

  const handleSubmit = (values: any) => {
    alert(JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={formik.handleSubmit}>
          <ModalHeader>New Client</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewClientForm formik={formik} />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr="3" onClick={props.onClose}>
              Cancel
            </Button>
            <Button type="submit" colorScheme="blue" onClick={props.onClose}>
              Add
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
export default NewClientModal;
