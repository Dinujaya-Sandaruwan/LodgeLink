import React from "react";
import { useQuery } from "react-query";
import { getAllProperties } from "../utils/api";

const useProperties = () => {
  const { data, isError, isloding, refetch } = useQuery({
    queryKey: "allProperties",
    queryFn: getAllProperties,
    refetchOnWindowFocus: false,
  });
  return {
    data,
    isError,
    isloding,
    refetch,
  };
};

export default useProperties;
