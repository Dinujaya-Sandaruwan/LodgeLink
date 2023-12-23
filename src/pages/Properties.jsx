import React from "react";
import SearchBar from "../components/SearchBar";
import useProperties from "../hooks/useProperties";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  console.log(data);
  return (
    <div className="wrapper">
      <div className="properties-container">
        <SearchBar></SearchBar>
      </div>
    </div>
  );
};

export default Properties;
