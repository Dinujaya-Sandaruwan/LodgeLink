import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../utils/api";
import { PuffLoader } from "react-spinners";
import Map from "../components/Map";

import { AiFillHeart } from "react-icons/ai";
import { FaShower } from "react-icons/fa6";
import { AiTwotoneCar } from "react-icons/ai";
import { MdMeetingRoom, MdLocationPin } from "react-icons/md";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["rsed", id],
    queryFn: () => getProperty(id),
    refetchOnWindowFocus: false,
  });

  if (isLoading)
    return (
      <div className="wrapper">
        <div className="property-loading">
          <PuffLoader />
        </div>
      </div>
    );
  if (isError)
    return (
      <div className="wrapper">
        <div className="property-error">
          <span>Error while fetching property details</span>
        </div>
      </div>
    );

  return (
    <div className="wrapper">
      <div className="property-container">
        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>
        <img src={data?.image} alt="Home image" />

        <div className="propertyDetails">
          <div className="left">
            <div className="head">
              <span>{data.title}</span>
              <span>$ {data.price}</span>
            </div>
            <div className="facilities">
              <div className="facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>
              <div className="facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data?.facilities?.parkings} Parking</span>
              </div>
              <div className="facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.facilities?.bedrooms} Room/s</span>
              </div>
            </div>

            <span className="description">{data?.description}</span>
            <div className="address">
              <MdLocationPin size={25} color="#1F3E72" />
              <span>
                {data?.address}
                {data.city}
                {data.country}
              </span>
            </div>

            <button className="button">Book your visit</button>
          </div>
          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
