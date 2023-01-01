import wave from "../../assets/home_img/wave-logo.png";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <h2 className="home-text">
          SURF <b className="red">YOUR WAY </b>
          <br />
          TO LIFE
        </h2>
        <button className="btn">SEE MORE</button>
        <img src={wave} alt="" className="wave-img" />
      </div>
    </div>
  );
}

export default Home;
