import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Graf from "./Graf";

const GrafMain = () => {
  const [error, setError] = useState("");
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const location = useLocation(); //  current URL using the useLocation hook.

  // useEffect to make data inputs work properly
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    // work with the entire search string and its parameters, instead of manually splitting and encoding each parameter
    const data1Param = searchParams.get("data1");
    const data2Param = searchParams.get("data2");

    if (data1Param) {
      // data1
      const values1 = data1Param.split(",");

      if (values1.length !== 8) {
        return setError("Datová řada data1 musí obsahovat 8 čísel.");
      } else if (values1.some((value) => value.trim() === "")) {
        return setError("Chybějící hodnota data1.");
      } else if (
        values1.some((value) => isNaN(value) || value < 0 || value > 100)
      ) {
        return setError(
          "Hodnoty datové řady data1 musí být čísla v rozsahu od 0 do 100."
        );
      } else {
        setData1(values1);
        setError("");
      }
    } else {
      return setError("Datová řada data1 nespecifikována.");
    }

    if (data2Param) {
      // data2
      const values2 = data2Param.split(",");

      if (values2.length !== 8) {
        return setError("Datová řada data2 musí obsahovat 8 čísel.");
      } else if (values2.some((value) => value.trim() === "")) {
        return setError("Chybějící hodnota data2.");
      } else if (
        values2.some((value) => isNaN(value) || value < 0 || value > 100)
      ) {
        return setError(
          "Hodnoty datové řady data2 musí být čísla v rozsahu od 0 do 100."
        );
      } else {
        setData2(values2);
        setError("");
      }
    } else {
      setError("Datová řada data2 nespecifikována.");
    }
  }, [location.search]);

  return (
    <div className="GrafMain page">
      {error ? (
        <p className="errorMSG">{error}</p>
      ) : (
        <Graf data1={data1} data2={data2} />
      )}
    </div>
  );
};

export default GrafMain;
