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

interface NewClientModalProps {
  isOpen: boolean;
  onClose(): void;
}

const NewClientModal: React.FC<NewClientModalProps> = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Client</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <NewClientForm />
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr="3" onClick={props.onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={props.onClose}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default NewClientModal;
