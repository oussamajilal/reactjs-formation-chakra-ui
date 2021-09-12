import * as React from "react";
import { Button, Input } from "@chakra-ui/react";
import { useFormik } from "formik";

const ReceipeForm = () => {
  const initialValues = { id: "0", name: "Awesome default name" };

  const handleSubmit = (values: any) => {
    alert(JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input placeholder="ID" id="id" {...formik.getFieldProps("id")} />
      <Input placeholder="Name" id="name" {...formik.getFieldProps("name")} />
      <Button colorScheme="teal" variant="outline" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ReceipeForm;
