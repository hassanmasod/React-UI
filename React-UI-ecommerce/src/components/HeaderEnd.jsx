import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const HeaderEnd = () => {
  return (
    <div className="navbar ">
      <Container>
        <div className="d-flex">
          <Link
            to="/home"
            className="pe-4 text-dark fw-bold text-decoration-none"
          >
            HOME
          </Link>
          <Link
            to="/categorie"
            className="pe-4 text-dark fw-bold text-decoration-none"
          >
            CATEGORIES
          </Link>

          <Link
            to="/product"
            className="pe-4 text-dark fw-bold text-decoration-none"
          >
            PRODUCTS
          </Link>

          <Link
            className="pe-4 text-dark fw-bold text-decoration-none"
            href="/"
          >
            PAGES
          </Link>
          <Link
            className="pe-4 text-dark fw-bold text-decoration-none"
            href="/"
          >
            BLOG
          </Link>
          <Link
            className="pe-4 text-dark fw-bold text-decoration-none"
            href="/"
          >
            ELEMENTS
          </Link>
          <Link
            to="/loginsingup"
            className="pe-4 text-dark fw-bold text-decoration-none"
          >
            CONTACT US
          </Link>
        </div>
        <div className="">
          <a
            className=" text-dark fw-bold text-decoration-none"
            href="/"
          >
            SPECIAL OFFER
          </a>
          <a
            className="ps-4 text-dark fw-bold text-decoration-none"
            href="/"
          >
            BUY PORTO
          </a>
        </div>
      </Container>
    </div>
  );
};

export default HeaderEnd;
