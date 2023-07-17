import "./middle.css";
import Cards from "../Cards/Cards";
import AllVideo from "../ALLVIDEO/AllVideo";
import ThreeMiddle from "../afterMiddle/ThreeMiddle";
const Middle = () => {
  return (
    <div className="container">
      <AllVideo />
      <div className="cardss">
        {" "}
        <Cards />
      </div>

      <ThreeMiddle />
    </div>
  );
};

export default Middle;
