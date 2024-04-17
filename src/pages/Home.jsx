import React from "react";
import "./css/Home/Home.css";
import { Link } from "react-router-dom";
import InputsBoxSetGrafData from "../components/pages/Home/InputsBoxSetChartData";

const Home = () => {
  return (
    <div className="Home page">
      <h1>Zobrazení grafu</h1>

      <div className="home_box">
        <div className="infoBox">
          <p>Příklad URL pro zobrazení dat grafu:</p>
          <div className="link_box">
            {/*  ?  signalizuje začátek části query string, používá se bežně jako oddělovač mezi adresou URL a parametry dotazu */}
            <Link to="http://localhost:3000/graf?data1=23,12,71,49,33,100,2,88&data2=22,67,33,98,1,3,9,56">
              http://localhost:3000/graf?data1=23,12,71,49,33,100,2,88&data2=22,67,33,98,1,3,9,56
            </Link>
          </div>
        </div>
        <InputsBoxSetGrafData />
      </div>
    </div>
  );
};

export default Home;
