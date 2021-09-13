import * as React from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/input";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { Switch } from "@chakra-ui/switch";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { EmailIcon } from "@chakra-ui/icons";

const NewClientForm = () => {
  return (
    <>
      <Input placeholder="ID" mb="2" />
      <Input placeholder="First Name" mb="2" />
      <Input placeholder="Last Name" mb="2" />
      <InputGroup mb="2">
        <InputLeftElement
          pointerEvents="none"
          children={<EmailIcon color="gray.300" />}
        />
        <Input type="email" placeholder="Email" />
      </InputGroup>
      <NumberInput
        mb="2"
        defaultValue={70}
        precision={2}
        step={0.1}
        max={100}
        min={20}
      >
        <NumberInputField placeholder="Size" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <InputGroup mb="2">
        <InputLeftAddon children="+212" />
        <Input type="tel" placeholder="Phone number" />
      </InputGroup>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="client-active" mb="0">
          Active?
        </FormLabel>
        <Switch id="client-active" isChecked={true} />
      </FormControl>
    </>
  );
};

export default NewClientForm;
