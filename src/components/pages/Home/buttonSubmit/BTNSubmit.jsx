import React from "react";
import { useNavigate } from "react-router-dom";

const BTNSubmit = ({ form, setError }) => {
  const navigate = useNavigate();

  const btnSubmit = (e) => {
    e.preventDefault();

    // const regex = /^(\d{1,2}|100)(,\s*\d{1,2}|,\s*100){7}$/; // 8* (0 - 100 Number)

//update regex with decimal numbers

    const regex = /^(\d{1,2}|\d{1,2}\.\d*|100)(,(\d{1,2}|\d{1,2}\.\d*|100)){7}$/; // 8* (0 - 100 Number)
    
    if (!regex.test(form.data1) || !regex.test(form.data2)) {
      return setError("8* 0-100 oddělené ,");
    }

    if (form.data1 && form.data2) {
    // encodeURIComponent for change string to the percentage code
      // const data1Param = encodeURIComponent(form.data1);
      // const data2Param = encodeURIComponent(form.data2);
      // navigate(`/graf?data1=${data1Param}&data2=${data2Param}`); // Set URL for chart

  // Change navigate 
      navigate(`/graf?data1=${form.data1}&data2=${form.data2}`); // Set URL for chart
    }
  };

  return (
    <>
      <button onClick={btnSubmit}>Zobraz Graf</button>
    </>
  );
};

export default BTNSubmit;
