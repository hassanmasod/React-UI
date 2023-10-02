import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUser,
  faHeart,
  faBagShopping,
  faAngleLeft,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
const HeaderMiddle = () => {
  return (
    <nav className="pt-2">
      <Container className="d-flex  pt-2">
        <div className=" image mb-2 pe-5">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="inputfield">
          <input className=" border-0 ps-3 search-Box shadow form-control-lg  " type="search" placeholder="Search..." />
          <a href="/"><FontAwesomeIcon className="position-absolute start-50  search-icon " icon={faMagnifyingGlass}  /></a>
        </div>

        <div className="ps-5 d-flex main-left ">
          <FontAwesomeIcon
            className="iconsphone pe-2"
            icon={faPhone}
            shake
            style={{ color: "#f8f7f7" }}
          />
          <div className=" d-flex ">
            <div>
              <h6 className="fz-4" style={{ color: "var(--lightBlue)" }}>
                <small>
                  <em>
                    {" "}
                    <b>call us now</b>
                  </em>{" "}
                </small>
                <br />
                <a className="text-decoration-none text-light" href="/">
                  0322-4761203
                </a>
              </h6>
            </div>
            <div className="icons ps-5">
              <i>
                <FontAwesomeIcon className="pe-2 iconic" icon={faUser} fade />
              </i>
              <i>
                <FontAwesomeIcon className="pe-2 iconic" icon={faHeart} fade />{" "}
              </i>
              <i>
                <FontAwesomeIcon
                  className="pe-2 iconic"
                  icon={faBagShopping}
                  fade
                />
              </i>
              <i>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  fade
                  style={{ color: "var(--white)" }}
                />
              </i>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default HeaderMiddle;
