import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Cart from "../cart/cart";

export default function NavbarComponent(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Whist{" "}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stats">
              Stats
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
          </li>
          <li className="nav-item dropdown justify-content-end">
            <Dropdown size="lg" className="d-inline mx-2" autoClose={false}>
              <Dropdown.Toggle id="dropdown-autoclose-false">
                Cart
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Cart />
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
}
