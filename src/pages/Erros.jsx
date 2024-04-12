import "./css/Error/Error.css";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="Error">
      <h1>404</h1>
      <br />
      <p>Stránka nebyla nalezena</p>
      <br />
      <Link to="/">
        <HiHome className="icon" />
      </Link>
    </div>
  );
};

export default Error;
