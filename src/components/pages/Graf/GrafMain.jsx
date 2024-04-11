// import { useState, useEffect } from "react";
// import Chart from "react-apexcharts";
// import "./css/GrafMain/GrafMain.css"
// import { useLocation } from "react-router-dom";

// const clamp = (value, min, max) => {
//   return Math.min(Math.max(value, min), max);
// };

// const GrafMain = () => {
//   const [error,setError] = useState("")

//   const [data1, setData1] = useState([]);
//   const [data2, setData2] = useState([]);
  
//   const location = useLocation();

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const data1Param = searchParams.get("data1");
//     const data2Param = searchParams.get("data2");

//     if (data1Param) {
//       setData1(data1Param.split(",").map(Number));
//     }

//     if (data2Param) {
//       setData2(data2Param.split(",").map(Number));
//     }
//   }, [location.search]);

//   return (
//     <div className="GrafMain page">

//       <Chart type="line"
//         width="100%" // Šířka grafu
//         height="100%" //velikost grafu

//         // DATA set
//         // series={[
//         //   {
//         //     name: "data1",
//         //     data:[90,45,67,1,50,68,78,24]
//         //   },
//         //   {
//         //     name: "data2",
//         //     data:[20,30,50,80,70,60,5,25]
//         //   }
//         // ]}
//         series={[{ name: "data1", data: data1 }, { name: "data2", data: data2 }]}

//         options={{
//           title:{ text: "Horní title"}, // Vrchní hodnota
//           xaxis:{ // osa X
//             title:{ text: "Spodní title" }, 
//             categories:[1,2,3,4,5,6,7,8]
//           },
//           yaxis:{
//             title:{ text: "Boční title"}
//           }
//         }}

//       >


//       </Chart>
//     </div>
//   );
// };

// export default GrafMain;

// ------------------------------------------------------
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Graf from "./Graf";

const GrafMain = () => {
  const [error, setError] = useState("");
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const data1Param = searchParams.get("data1");
    const data2Param = searchParams.get("data2");
   

    if (data1Param) {
      const values1 = data1Param.split(",");

      if (values1.length !== 8) {
        return setError("Datová řada data1 musí obsahovat 8 čísel.");
      } else if (values1.some(value => value.trim() === "")) {
        return setError("Chybějící hodnota data1.");
      } else if(values1.some(value => isNaN(value) || value < 0 || value > 100)){
        return setError("Hodnoty datové řady data1 musí být čísla v rozsahu od 0 do 100.");
      } else {
        setData1(values1);
        setError("");
      }
    } else {
      return setError("Datová řada data1 nespecifikována.");
    }
    

    if (data2Param) {
      const values2 = data2Param.split(",");

      if (values2.length !== 8) {
        return setError("Datová řada data2 musí obsahovat 8 čísel.");
      } else if (values2.some(value => value.trim() === "")) {
        return setError("Chybějící hodnota data2.");
      } else if (values2.some(value => isNaN(value) || value < 0 || value > 100)) {
        return setError("Hodnoty datové řady data2 musí být čísla v rozsahu od 0 do 100.");
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
      {
        error 
        ? <p className="errorMSG">{error}</p> 
        :  <Graf data1={data1} data2={data2} />
      }
    </div>
  );
};

export default GrafMain;