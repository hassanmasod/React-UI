import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <Container>
      <div className="d-flex mb-4">
        <div className=" align-items-start flex-column pe-3 ">
          <img
            src="/Images/banner-1.jpg"
            alt="Banner1"
            srcset=""
            className="pb-3"
          />
          <img
            src="/Images/banner-2.jpg"
            alt="Banner1"
            srcset=""
            className="pb-3"
          />
          <img src="/Images/banner-3.jpg" alt="Banner1" srcset="" />
        </div>

        <div className=" align-items-center flex-column pe-3">
          <img
            src="/Images/banner-7.jpg"
            alt="Banner1"
            srcset=""
            className="mb-3"
          />
          <img
            src="/Images/banner-8.jpg"
            alt="Banner1"
            srcset=""
            className="mb-3"
          />
          <img src="/Images/banner-9.jpg" alt="Banner1" srcset="" />
        </div>

        <div className="align-items-end flex-column">
          <img
            src="/Images/banner-4.jpg"
            alt="Banner1"
            srcset=""
            className="pb-3"
          />
          <img
            src="/Images/banner-5.jpg"
            alt="Banner1"
            srcset=""
            className="pb-3"
          />
          <img src="/Images/banner-6.jpg" alt="Banner1" srcset="" />
        </div>
      </div>
      <div className="mt-5">
  <h5>FEATURED PRODUCTS </h5>
  <hr/>
</div>
    </Container>
  );
};

export default Banner;
