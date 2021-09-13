import * as React from "react";
import { Table, TableCaption, Tbody, Tfoot, Thead } from "@chakra-ui/table";
import ClientRow from "./ClientRow";
import { Container } from "@chakra-ui/layout";
import ClientHeader from "./ClientHeader";

const ClientTable = () => {
  const data = [
    {
      id: "1",
      firstName: "Ahmed",
      lastName: "Ali",
      email: "ahmed.ali@email.com",
      phoneNumber: "0666778899",
      height: 72.5,
      isActive: true,
    },
    {
      id: "2",
      firstName: "Salim",
      lastName: "Karam",
      email: "salim.karam@email.com",
      phoneNumber: "0666778898",
      height: 65.0,
      isActive: false,
    },
    {
      id: "3",
      firstName: "Soukaina",
      lastName: "Latif",
      email: "soukaina.latif@email.com",
      phoneNumber: "0666778897",
      height: 69.3,
      isActive: true,
    },
  ];

  return (
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
          {data.map((user) => (
            <ClientRow user={user} />
          ))}
        </Tbody>
        <Tfoot>
          <ClientHeader />
        </Tfoot>
      </Table>
    </Container>
  );
};

export default ClientTable;
