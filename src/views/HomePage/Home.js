import wave from "../../assets/home_img/wave-logo.png";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <h2 className="home-text">
          SURF <b className="red">YOUR WAY </b>
          <br />
          TO LIFE
        </h2>
        <Link to="/products/">
          <button className="btn">VER MÁS</button>
        </Link>
        <img src={wave} alt="" className="wave-img" />
      </div>
    </div>
  );
}

export default Home;
