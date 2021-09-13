import * as React from "react";
import { Td, Tr } from "@chakra-ui/table";
import { UserType } from "./User";
import { CheckIcon, NotAllowedIcon } from "@chakra-ui/icons";

interface ClientRowProps {
  user: UserType;
}

const ClientRow: React.FC<ClientRowProps> = (props) => {
  return (
    <Tr>
      <Td>{props.user.id}</Td>
      <Td>{props.user.firstName}</Td>
      <Td>{props.user.lastName}</Td>
      <Td>{props.user.email}</Td>
      <Td>{props.user.phoneNumber}</Td>
      <Td isNumeric>{props.user.height}</Td>
      <Td>{props.user.isActive ? <CheckIcon color="green.500" /> : <NotAllowedIcon color="red.500" />}</Td>
    </Tr>
  );
};

export default ClientRow;
