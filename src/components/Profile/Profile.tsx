import * as React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { useQuery } from "react-query";
import queries from "../queries";
import Loader from "../Loader";
import ErrorAlert from "../ErrorAlert";

const Profile = () => {
  const { data, error, isError, isLoading } = useQuery(
    "profile",
    queries.fetchProfile
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError && error instanceof Error) {
    return <ErrorAlert message={error.message} />;
  }

  return (
    <>
      {data && (
        <Flex direction="column">
          <Flex justifyContent="center">
            <Box w="30%">ID</Box>
            <Box w="30%">{data.id}</Box>
          </Flex>
          <Flex justifyContent="center">
            <Box w="30%">First Name</Box>
            <Box w="30%">{data.firstName}</Box>
          </Flex>
          <Flex justifyContent="center">
            <Box w="30%">Last Name</Box>
            <Box w="30%">{data.lastName}</Box>
          </Flex>
          <Flex justifyContent="center">
            <Box w="30%">Email</Box>
            <Box w="30%">{data.email}</Box>
          </Flex>
          <Flex justifyContent="center">
            <Box w="30%">Phone Number</Box>
            <Box w="30%">{data.phoneNumber}</Box>
          </Flex>
          <Flex justifyContent="center">
            <Box w="30%">Height</Box>
            <Box w="30%">{data.height}</Box>
          </Flex>
          <Flex justifyContent="center">
            <Box w="30%">Active?</Box>
            <Box w="30%">{data.isActive ? "Yes" : "No"}</Box>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Profile;
