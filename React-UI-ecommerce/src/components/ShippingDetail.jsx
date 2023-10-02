import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faCircleDollarToSlot,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons";
const ShippingDetail = () => {
  return (
    <>
      <Container>
        <div className="  mt-3 mb-3 border">
          <div className="d-flex pt-4   justify-content-center">
            <div className=" d-flex pe-5">
              <FontAwesomeIcon className="shipicon pe-3" icon={faTruckFast} />
              <div>
                <h6>
                  <small>
                    FREE SHIPPING & RETURN <br />{" "}
                    <span style={{ color: "var(--addtocard)" }}>
                      {" "}
                      Free Shipping on all orders over $99
                    </span>{" "}
                  </small>
                </h6>
              </div>
            </div>
            <div className="vl mb-3 "></div>
            <div className="  d-flex ps-5 pe-5">
              <FontAwesomeIcon
                className="shipicon pe-3 pb-3"
                icon={faCircleDollarToSlot}
              />
              <div>
                <h6>
                  <small>
                    MONEY BACK GURAANTEE <br />{" "}
                    <span style={{ color: "var(--addtocard)" }}>
                      {" "}
                      100% Money back guraantee
                    </span>{" "}
                  </small>
                </h6>
              </div>
            </div>
            <div className="vl mb-3"></div>
            <div className=" d-flex ps-5">
              <FontAwesomeIcon
                className="shipicon pe-3"
                icon={faHourglassEnd}
              />
              <div>
                <h6>
                  <small>
                    ONLINE SUPPORT 24/7 <br />{" "}
                    <span style={{ color: "var(--addtocard)" }}>
                      {" "}
                      Whenever you'd like to do shopping
                    </span>{" "}
                  </small>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default ShippingDetail;
