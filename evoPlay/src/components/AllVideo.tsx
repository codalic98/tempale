// import "./navbar.css";

const AllVideo = () => {
  return (
    <nav className="nav flex-column flex-sm-row">
      <a className="nav-link active" href="#">
        ALL
      </a>
      <a className="nav-link" href="#">
        VIDEO SLOTS
      </a>
      <a className="nav-link" href="#">
        INSTANT GAMES
      </a>
      <a className="nav-link " href="#">
        TABLE GAMES
      </a>
      <a className="nav-link " href="#">
        CLASSICS
      </a>
      <a className="nav-link " href="#">
        BONUS BUY
      </a>
      <a className="nav-link " href="#">
        JACKBOT
      </a>
      <form className="FORMa ml-sm-auto">
        <input
          className="form-control mr-sm-3"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </nav>
  );
};

export default AllVideo;
