import "./App.css";
import Middle from "./components/Middle/Middle";
import NavBar from "./components/Navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <NavBar />

      <br />
      <br />
      <Middle />
      {/* <ThreeMiddle /> */}
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
