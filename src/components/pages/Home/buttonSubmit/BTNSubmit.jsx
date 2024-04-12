import React from "react";

const BTNSubmit = ({ form, navigate, setError }) => {
  const btnSubmit = (e) => {
    e.preventDefault();

    const regex = /^(\d{1,2}|100)(,\s*\d{1,2}|,\s*100){7}$/; // 8* (0 - 100 Number)
    if (!regex.test(form.data1) || !regex.test(form.data2)) {
      return setError("8* 0-100 oddělené ,");
    }

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
