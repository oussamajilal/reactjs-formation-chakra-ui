import * as React from "react";
import { Table, TableCaption, Tbody, Tfoot, Thead } from "@chakra-ui/table";
import ClientHeader from "./ClientHeader";
import { Container } from "@chakra-ui/layout";
import ClientRow from "./ClientRow";
import { Client } from "./Client";

interface ClientListProps {
  clients: Array<Client>;
}

const ClientTable: React.FC<ClientListProps> = (props) => (
  <Container
    maxW="container.lg"
    centerContent
    border="1px"
    borderColor="gray.200"
  >
    <Table variant="striped" colorScheme="teal">
      <TableCaption>Users List</TableCaption>
      <Thead>
        <ClientHeader />
      </Thead>
      <Tbody>
        {props.clients.map((client) => (
          <ClientRow client={client} />
        ))}
      </Tbody>
      <Tfoot>
        <ClientHeader />
      </Tfoot>
    </Table>
  </Container>
);

export default ClientTable;
