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
import { FormikHandlers } from "formik";

interface NewClientFormProps {
  formik: FormikHandlers;
}

const NewClientForm: React.FC<NewClientFormProps> = (props) => {
  return (
    <>
      <Input placeholder="ID" mb="2" {...props.formik.getFieldProps("id")} />
      <Input
        placeholder="First Name"
        mb="2"
        {...props.formik.getFieldProps("firstName")}
      />
      <Input
        placeholder="Last Name"
        mb="2"
        {...props.formik.getFieldProps("lastName")}
      />
      <InputGroup mb="2">
        <InputLeftElement
          pointerEvents="none"
          children={<EmailIcon color="gray.300" />}
        />
        <Input
          type="email"
          placeholder="Email"
          {...props.formik.getFieldProps("email")}
        />
      </InputGroup>
      <InputGroup mb="2">
        <InputLeftAddon children="+212" />
        <Input
          type="tel"
          placeholder="Phone Number"
          {...props.formik.getFieldProps("phoneNumber")}
        />
      </InputGroup>
      <NumberInput
        mb="2"
        defaultValue={props.formik.getFieldProps("height").value}
        onChange={props.formik.getFieldProps("height").onChange}
        onBlur={props.formik.getFieldProps("height").onChange}
        precision={2}
        step={0.1}
        max={100}
        min={20}
      >
        <NumberInputField
          placeholder="Height"
          {...props.formik.getFieldProps("height")}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="client-active" mb="0">
          Active?
        </FormLabel>
        <Switch
          id="client-active"
          isChecked={props.formik.getFieldProps("isActive").value}
          {...props.formik.getFieldProps("isActive")}
        />
      </FormControl>
    </>
  );
};

export default NewClientForm;
