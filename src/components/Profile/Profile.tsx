import * as React from "react";
import { Box } from "@chakra-ui/layout";
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
        <Box>
          <Box>
            <Box>ID</Box>
            <Box>{data.id}</Box>
          </Box>
          <Box>
            <Box>First Name</Box>
            <Box>{data.firstName}</Box>
          </Box>
          <Box>
            <Box>Last Name</Box>
            <Box>{data.lastName}</Box>
          </Box>
          <Box>
            <Box>Email</Box>
            <Box>{data.email}</Box>
          </Box>
          <Box>
            <Box>Phone Number</Box>
            <Box>{data.phoneNumber}</Box>
          </Box>
          <Box>
            <Box>Height</Box>
            <Box>{data.height}</Box>
          </Box>
          <Box>
            <Box>Active?</Box>
            <Box>{data.isActive}</Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Profile;
