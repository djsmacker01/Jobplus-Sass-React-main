import React from "react";
import "../listings/listings.scss";

export default function ListingFilter(props) {
  const { children } = props;
  return <div className="listing">{children}</div>;
}
