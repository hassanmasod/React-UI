import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className="d-flex pt-5">
            <div>
              <h2 className="fs-5 fw-bold">
                <small>CONTACT INFO</small>
              </h2>
              <p className="">
                <small>
                  ADDRESS:
                  <br />
                  <span className="text-secondary"> AWT Phase2, Jati umrah Road, Lahore</span>
                </small>
              </p>
              <p>
                <small>
                  PHONE:
                  <br /><span className="text-secondary"> (+92) 322-4761203 </span>       
                </small>
              </p>
              <p>
                <small>
                  EMAIL:
                  <br /><span className="text-secondary"> hassanmasood,se@gmail.com </span>
                </small>
              </p>
              <p>
                <small>
                  WORKING DAYS/HOURS:
                  <br /> <span className="text-secondary"> Mon - Sun / 9:00 AM - 8:00 PM</span>
                </small>
              </p>
            </div>

            <div className="ps-5 ms-5">
              <h6 className="fs-5 fw-bold">
                <small>SUBSCRIBE NEWSLETTER</small>
              </h6>
              <p className="text-secondary"> <small>
                  Get all the latest information on Events, Sales and Offers.
                  Sign up for newsletter today.
                </small>
              </p>
              <hr className="mt-5" />
<div className="d-flex">
              <div className="pt-4">
            <h6 className="fs-5 fw-bold">
                <small>CUSTOMER SERVICE</small>
              </h6>
              <ul className="list-unstyled ps-3">
              <li className="text-secondary">About us</li>
              <li className="text-secondary">Contact us</li>
              <li className="text-secondary">My Account</li>
              </ul>
              </div>


              <div className="pt-4 ps-5 ms-5">
            <h6 className="fs-5 fw-bold">
                <small>ABOUT US</small>
              </h6>
              <div className="list-unstyled ps-3">
              <li className="text-secondary">Super Fast Html Template</li>
              <li className="text-secondary">1st Fully working Ajax Theme</li>
              <li className="text-secondary">36 Unique Shop Layouts</li>
              </div>
            </div>
   </div>
            
            </div>

            
          </div>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
