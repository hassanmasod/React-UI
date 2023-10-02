import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faGauge,
  faGift,
  faSeedling,
  faMicrophoneLines,
  faBaseballBatBall,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <>
      <Container>
        <div className="d-flex mt-4">
          <div className="sidebare ">
            <h5 className="pt-3 pb-3 ps-3 fw-bold fs-6">TOP CATEGORIES</h5>
            <ul class=" sideBar-text list-unstyled ps-4 d-block ">
              <li>
                <FontAwesomeIcon className="text-secondary" icon={faShirt} />
                <a className="ps-3 text-decoration-none text-secondary" href="/">
                  Fashion
                </a>
              </li>
              <spam>______________________</spam>
              <li>
                <FontAwesomeIcon className="text-secondary"  icon={faGauge} />
                <a className="ps-3 text-decoration-none text-secondary " href="/">
                  Electronic
                </a>
              </li>
              <spam>______________________</spam>
              <li>
                <FontAwesomeIcon className="text-secondary"  icon={faGift} />
                <a className="ps-3 text-decoration-none text-secondary" href="/">
                  Gifts
                </a>
              </li>
              <spam>______________________</spam>
              <li>
                <FontAwesomeIcon  className="text-secondary" icon={faSeedling} />
                <a className="ps-3 text-decoration-none text-secondary" href="/">
                  Home & Garden
                </a>
              </li>

              <spam>______________________</spam>
              <li>
                <FontAwesomeIcon className="text-secondary"  icon={faMicrophoneLines} />
                <a className="ps-3 text-decoration-none text-secondary" href="/">
                  Music
                </a>
              </li>
              <spam>______________________</spam>
              <li>
                <FontAwesomeIcon className="text-secondary"  icon={faBaseballBatBall} />
                <a className="ps-3 text-decoration-none text-secondary" href="/">
                  Sports
                </a>
              </li>
              <li>
                <Button className="hugeSale mt-3 ps-4 pe-4 pt-3 pb-3 ms-3 text-white border-0 pe-auto">
                  <small>HUGE SALE-70% OOF</small>
                </Button>
              </li>
            </ul>
          </div>

          <div className=" ms-3 ">
            <div className="position-relative  ">
              <img src="/Images/home.jpg" alt="Image1" />
            </div>
            <div className="bannerText  position-absolute top-50 start-50 translate-middle mt-5 ">
              <h4 className="pt-5 fs-6 fw-bold opacity-50">
                <small>Find the Boundaries. Push Through!</small>
              </h4>
              <h2 className="text-white summerSale fs-1 fw-bold">Summer Sale</h2>
              <h3 className="offer text-white mt-0 fw-bold fs-1">30% OFF</h3>
              <a className="btn btn-dark ms-5" href="/">
                Get Yours!
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SideBar;
