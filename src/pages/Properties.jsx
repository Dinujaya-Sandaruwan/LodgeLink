import React from "react";
import SearchBar from "../components/SearchBar";
import useProperties from "../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  if (isError) {
    <div className="wrapper">Error While Fetching Data</div>;
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="properties-container">
        <SearchBar />
        <div className="properties">
          {data.map((card, index) => (
            <PropertyCard card={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
