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
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { EmailIcon } from "@chakra-ui/icons";
import { FormikProps } from "formik";
import { Client } from "./Client";

interface NewClientFormProps {
  formik: FormikProps<Client>;
}

const NewClientForm: React.FC<NewClientFormProps> = (props) => {
  return (
    <>
      <FormControl
        mb="2"
        isInvalid={!!(props.formik.touched.id && props.formik.errors.id)}
      >
        <Input placeholder="ID" {...props.formik.getFieldProps("id")} />
        <FormErrorMessage>{props.formik.errors.id}</FormErrorMessage>
      </FormControl>
      <FormControl
        mb="2"
        isInvalid={
          !!(props.formik.touched.firstName && props.formik.errors.firstName)
        }
      >
        <Input
          data-testid="new-client-first-name"
          placeholder="First Name"
          {...props.formik.getFieldProps("firstName")}
        />
        <FormErrorMessage>{props.formik.errors.firstName}</FormErrorMessage>
      </FormControl>
      <FormControl
        mb="2"
        isInvalid={
          !!(props.formik.touched.lastName && props.formik.errors.lastName)
        }
      >
        <Input
          data-testid="new-client-last-name"
          placeholder="Last Name"
          {...props.formik.getFieldProps("lastName")}
        />
        <FormErrorMessage>{props.formik.errors.firstName}</FormErrorMessage>
      </FormControl>
      <FormControl
        mb="2"
        isInvalid={!!(props.formik.touched.email && props.formik.errors.email)}
      >
        <InputGroup>
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
        <FormErrorMessage>{props.formik.errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl
        mb="2"
        isInvalid={
          !!(
            props.formik.touched.phoneNumber && props.formik.errors.phoneNumber
          )
        }
      >
        <InputGroup>
          <InputLeftAddon children="+212" />
          <Input
            type="tel"
            placeholder="Phone Number"
            {...props.formik.getFieldProps("phoneNumber")}
          />
        </InputGroup>
        <FormErrorMessage>{props.formik.errors.phoneNumber}</FormErrorMessage>
      </FormControl>
      <FormControl
        mb="2"
        isInvalid={
          !!(props.formik.touched.height && props.formik.errors.height)
        }
      >
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
        <FormErrorMessage>{props.formik.errors.height}</FormErrorMessage>
      </FormControl>
      <FormControl
        display="flex"
        alignItems="center"
        isInvalid={
          !!(props.formik.touched.isActive && props.formik.errors.isActive)
        }
      >
        <FormLabel htmlFor="client-active" mb="0">
          Active?
        </FormLabel>
        <Switch
          id="client-active"
          isChecked={props.formik.getFieldProps("isActive").value}
          {...props.formik.getFieldProps("isActive")}
        />
        <FormErrorMessage>{props.formik.errors.isActive}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default NewClientForm;
