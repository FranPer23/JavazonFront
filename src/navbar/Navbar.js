import { Link } from "react-router-dom";

const Navbar = (prop) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body p-2"
        data-bs-theme="dark"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        {/* <button
          className="navbar-toggler dropdown"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <Link className="navbar-brand" to="/">
          <img
            src={require("../assets/JAVAZON-2-2-2024.png")}
            alt="Logo"
            style={{ width: "200px", height: "50px" }}
          />
        </Link>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item ms-3">
              <Link className="navbar-brand" to="items">
                Our Products
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="navbar-brand" to="allemployees">
                Our Staff
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="navbar-brand" to="itemform">
                New Product
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="navbar-brand" to="employeeform">
                New Employee
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
