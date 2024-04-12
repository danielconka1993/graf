import React from "react";

const BTNSubmit = ({ form, navigate }) => {
  const btnSubmit = (e) => {
    e.preventDefault();

    if (form.data1 && form.data2) {
      const data1Param = encodeURIComponent(form.data1);
      const data2Param = encodeURIComponent(form.data2);

      navigate(`/graf?data1=${data1Param}&data2=${data2Param}`); // Set URL for chart
    }
  };

  return (
    <>
      <button onClick={btnSubmit}>Zobraz Graf</button>
    </>
  );
};

export default BTNSubmit;
