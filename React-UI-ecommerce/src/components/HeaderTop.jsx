import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Headertop = () => {
  return (
    <header>
      <Container>
        <div className="d-flex justify-content-between  pt-3">
          <div class=" heading  ">
            <p>FREE RETURNS. STANDARD SHIPPING ORDERS $99+</p>
          </div>
          <div className=" d-flex heading1 text-decoration-none  ">
            <div className="d-inline-flex  ">
              <Link
                to="/categorie"
                className="pe-3 text-decoration-none textColor"
              >
                My Account
              </Link>
              <Link
                to="/categorie"
                className="pe-3 text-decoration-none textColor"
              >
                Contat us
              </Link>
              <Link
                to="/categorie"
                className="pe-3 text-decoration-none textColor"
              >
                Blog
              </Link>
              <Link
                to="/categorie"
                className="pe-3 text-decoration-none textColor"
              >
                My Wishlist
              </Link>
              <Link
                to="/categorie"
                className="pe-3 text-decoration-none textColor"
              >
                Cart
              </Link>
              <Link
                to="/login"
                className="pe-3 text-decoration-none textColor"
              >
                Log In
              </Link>
            </div>

            <span className="sperator"></span>
            <div className="d-flex">
              <div className="dropdown pe-2">
                <select>
                  <option value="ENG">ENG</option>
                  <option value="FRA">FRA</option>
                </select>
                <select>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <span className="sperator"></span>
              <div className="ps-3">
                <ul className="d-inline-flex ps-1 list-unstyled">
                  <li className="icon pe-2">
                    <FontAwesomeIcon icon={faTwitter} beatFade />
                  </li>
                  <li className="icon pe-2 ps-2">
                    <FontAwesomeIcon icon={faFacebook} beatFade />
                  </li>
                  <li className="icon pe-2 ps-2">
                    <FontAwesomeIcon icon={faInstagram} beatFade />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <span className="sperator1"></span> */}
      <hr className="mb-0 mt-0 topseperator" />
    </header>
  );
};
export default Headertop;
