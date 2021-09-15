import * as React from "react";
import { Button } from "@chakra-ui/button";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Container, Heading } from "@chakra-ui/layout";
import ClientTable from "./ClientTable";
import { useDisclosure } from "@chakra-ui/hooks";
import NewClientModal from "./NewClientModal";
import { Client } from "./Client";
import { useQuery } from "react-query";
import queries from "../queries";
import Loader from "../Loader";
import ErrorAlert from "../ErrorAlert";
import { UserContext } from "../UserContext";

const ClientList = () => {
  const { user } = React.useContext(UserContext);
  const { data, error, isError, isLoading, refetch } = useQuery(
    "clients",
    queries.fetchClients
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLoading) {
    return <Loader />;
  }

  if (isError && error instanceof Error) {
    return <ErrorAlert message={error.message} />;
  }

  const handleSubmit = () => {
    refetch();
  };

  return (
    <>
      {user && (
        <Heading>
          Welcome {user.firstName} {user.lastName}
        </Heading>
      )}
      {data && (
        <>
          <ClientTable clients={data} />
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
      )}
    </>
  );
};

export default ClientList;
