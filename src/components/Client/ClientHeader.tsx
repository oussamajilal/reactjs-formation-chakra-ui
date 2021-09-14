import * as React from "react";
import { Th, Tr } from "@chakra-ui/table";

const ClientHeader = () => (
  <Tr>
    <Th>ID</Th>
    <Th>First Name</Th>
    <Th>Last Name</Th>
    <Th>Email</Th>
    <Th>Phone Number</Th>
    <Th isNumeric>Height</Th>
    <Th>Active</Th>
  </Tr>
);

export default ClientHeader;
