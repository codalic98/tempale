import "./threeMiddle.css";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
const ThreeMiddle = () => {
  return (
    <MDBCard style={{ maxWidth: "100%" }}>
      <MDBRow className="g-0" style={{ backgroundColor: "#fafafa" }}>
        <MDBCol md="3">
          <MDBCardImage
            src="https://evoplay.games/wp-content/uploads/2023/06/Icons-Seo_02.png"
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardText>
              Evoplay is an innovative iGaming provider that is committed to
              delivering a wide range of products based on an array of themes
              and gamification layers. We create titles that go beyond the
              boundaries of traditional casino entertainment and give players a
              glimpse into the future of iGaming!
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      <MDBRow className="g-0" style={{ backgroundColor: "#fff" }}>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardText>
              From classic slots with a fresh twist to 3D masterpieces, runners
              inspired by video games, and cross-sell instant games, Evoplay’s
              portfolio is diverse, covering a broad audience. The games are not
              only visually stunning but are also designed with the latest
              technology, ensuring that every moment spent playing them is
              nothing short of spectacular.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md="3">
          <MDBCardImage
            src="https://evoplay.games/wp-content/uploads/2023/06/Icons-Seo_08.png"
            alt="..."
            fluid
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className="g-0" style={{ backgroundColor: "#fafafa" }}>
        <MDBCol md="3">
          <MDBCardImage
            src="https://evoplay.games/wp-content/uploads/2023/06/Icons-Seo_06.png"
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardText>
              Providing one-of-a-kind gameplay and experience, we supercharge
              our titles with immersive features and mechanics. Every game is an
              adventure waiting to be explored!
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default ThreeMiddle;
