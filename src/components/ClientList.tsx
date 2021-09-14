import * as React from "react";
import { Button } from "@chakra-ui/button";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/layout";
import ClientTable from "./ClientTable";
import { useDisclosure } from "@chakra-ui/hooks";
import NewClientModal from "./NewClientModal";
import { Client } from "./Client";

const ClientList = () => {
  const initialClients: Array<Client> = [
    {
      id: "1",
      firstName: "Ahmed",
      lastName: "Ali",
      email: "ahmed.ali@email.com",
      phoneNumber: "+212666778899",
      height: 72.5,
      isActive: true,
    },
    {
      id: "2",
      firstName: "Salim",
      lastName: "Karam",
      email: "salim.karam@email.com",
      phoneNumber: "+212666778898",
      height: 65.0,
      isActive: false,
    },
    {
      id: "3",
      firstName: "Soukaina",
      lastName: "Latif",
      email: "soukaina.latif@email.com",
      phoneNumber: "+212666778897",
      height: 69.3,
      isActive: true,
    },
  ];

  const [clients, setClients] = React.useState(initialClients);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (newClient: Client) => {
    setClients([...clients, newClient]);
  };

  return (
    <>
      <ClientTable clients={clients} />
      <Container maxW="container.lg" paddingTop="5">
        <Button
          data-testid="modal-btn"
          leftIcon={<PlusSquareIcon />}
          colorScheme="green"
          variant="solid"
          onClick={onOpen}
        >
          Add a new client
        </Button>
        <NewClientModal
          isOpen={isOpen}
          onClose={onClose}
          handleSubmit={handleSubmit}
        />
      </Container>
    </>
  );
};

export default ClientList;
