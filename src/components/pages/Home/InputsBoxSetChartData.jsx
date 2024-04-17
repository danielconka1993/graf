import { useState } from "react";
import InputBox from "../../elements/div/InputBox";
// import { useNavigate } from "react-router-dom";
import "./css/InputsBox_SetChartData/InputsBox_SetChartData.css";
import BTNSubmit from "./buttonSubmit/BTNSubmit";

const InputsBoxSetChartData = () => {
  // const navigate = useNavigate();

  const [form, setForm] = useState({
    data1: "",
    data2: "",
  });
  
  const[error,setError] = useState("")

  const handleInputChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="InputsBox_SetChartData">
      <h2>Data pro graf</h2>
      <p>Zadejte do pole čísla 0-100, * 8</p>
      
      <InputBox
        name="data1"
        placeholder="Zadejte (0-100,)*8"
        onInputChange={handleInputChange}
        value={form.data1}
        title="První pole hodnot:"
        regex="numbers_dot_commas"
        setError={setError}
      />

      <InputBox
        name="data2"
        placeholder="Zadejte (0-100,)*8"
        onInputChange={handleInputChange}
        value={form.data2}
        title="Druhé pole hodnot:"
        regex="numbers_dot_commas"
        setError={setError}
      />

      <div className="button_box">
        <div className="text_box">
          <p className="error">{error}</p>
        </div>
        
        <BTNSubmit form={form} setError={setError}/>
      </div>
    </div>
  );
};

export default InputsBoxSetChartData;
