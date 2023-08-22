import React from "react";

const Span = ({
  CategoryName,
  ResultName,
}: {
  CategoryName: string;
  ResultName: string;
}) => {
  return (
    <div className="m-2">
      <span>{CategoryName}:&nbsp;</span>
      <span>{ResultName}</span>
    </div>
  );
};

export default Span;
