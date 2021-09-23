import * as React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import ErrorAlert from "../ErrorAlert";
import { useDispatch, useSelector } from "react-redux";
import { PROFILE_FETCH_REQUESTED } from "./sagas";
import { RootState } from "../combineReducers";

const Profile = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: PROFILE_FETCH_REQUESTED });
  }, [dispatch]);

  const data = useSelector((state: RootState) => state.profilePage.profile);
  const error = useSelector((state: RootState) => state.profilePage.error);

  // if (isLoading) {
  //   return <Loader />;
  // }

  if (error instanceof Error) {
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
