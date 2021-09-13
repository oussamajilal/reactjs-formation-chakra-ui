import * as React from "react";
import { Td, Tr } from "@chakra-ui/table";
import { CheckIcon, NotAllowedIcon } from "@chakra-ui/icons";
import { Client } from "./Client";

interface ClientRowProps {
  client: Client;
}

const ClientRow: React.FC<ClientRowProps> = (props) => {
  return (
    <Tr>
      <Td>{props.client.id}</Td>
      <Td>{props.client.firstName}</Td>
      <Td>{props.client.lastName}</Td>
      <Td>{props.client.email}</Td>
      <Td>{props.client.phoneNumber}</Td>
      <Td isNumeric>{props.client.height}</Td>
      <Td>
        {props.client.isActive ? (
          <CheckIcon color="green.500" />
        ) : (
          <NotAllowedIcon color="red.500" />
        )}
      </Td>
    </Tr>
  );
};

export default ClientRow;
