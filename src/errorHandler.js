import React, { useState, useEffect } from "react";
export const useErrorHandler = (value, errors) => {
  const [error, setError] = useState([]);
  useEffect(
    () => {
      if (value.isError === true) {
        const filter = errors.filter(x => {
          return x.code === value.error.statusCode;
        });
        setError(
          value.error.statusCode === undefined ? [{ code: -1, message: value.error }] : filter
        );
      }
    },
    [value, errors]
  );
  return [error.length === 0 ? null : <Error msg={error[0].error.message} />, setError];
};


const Error = ({ msg = "" }) => (
  <div style={{ backgroundColor: "#ff0000", color: "#ffffff" }} key={0}>
    {msg.toString()}
  </div>
);