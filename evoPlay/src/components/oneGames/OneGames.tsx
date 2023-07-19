import Description from "../Description/Description";
import Form from "../Form/Form";
import SimilarGame from "../SimilarGame/SimilarGame";
import "./oneGames.css";
// import {
//   MDBCard,
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
// } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
const OneGames: React.FC = () => {
  return (
    <>
      {/* <div className="backIMG">
        <div className="imgCover">
          <img
            src="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
            alt=""
          />
        </div>
        <div className="wrapper">
          <div className="iphone-wrapper">
            <div className="screen">
              <div className="appleicon">
                <img src="https://goo.gl/4xuZUj" />
              </div>
              <div className="text">This is a free template! Have fun!</div>
            </div>
          </div>
        </div>
      </div> */}
      <Description />
      <SimilarGame />
      <Form />
    </>
  );
};
export default OneGames;
