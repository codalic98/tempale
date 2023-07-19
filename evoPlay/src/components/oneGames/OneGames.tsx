import "./oneGames.css";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
const OneGames: React.FC = () => {
  return (
    <div className="backIMG">
      <img
        className="imgCover"
        src="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
        alt=""
      />
      <div className="description">
        <div className="container">
          <MDBCard style={{ maxWidth: "100%" }}>
            <MDBRow className="g-0" style={{ backgroundColor: "#fafafa" }}>
              <MDBCol md="3">
                <MDBCardImage
                  src="https://evoplay.games/wp-content/uploads/2023/06/Icons-Seo_02.png"
                  alt="..."
                  fluid
                  style={{ filter: "blur(0px)" }}
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardText>
                    Evoplay is an innovative iGaming provider that is committed
                    to delivering a wide range of products based on an array of
                    themes and gamification layers. We create titles that go
                    beyond the boundaries of traditional casino entertainment
                    and give players a glimpse into the future of iGaming!
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>
      </div>
    </div>
  );
};
export default OneGames;
