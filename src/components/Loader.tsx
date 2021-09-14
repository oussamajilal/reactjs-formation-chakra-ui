import * as React from "react";
import { Center } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";

const Loader = () => (
  <Center>
    <CircularProgress isIndeterminate color="blue.300" />
  </Center>
);

export default Loader;
