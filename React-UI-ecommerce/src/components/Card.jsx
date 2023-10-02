
import { Card , Container} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";

const CardComponent = () => {
  return (
    <>
    <Container fluid className='backend pt-5 pb-5 mb-3'>
    <Container>
    <div className="d-flex">

      <Card className="border-0 mb-3 me-3 shadow" style={{ width: "30%" }}>
        <Card.Img src="/Images/card1.jpg" style={{ height: "200px" }} />
        <div className='ps-3'>
        <Card.Title className='pt-3'><small>Tan Casual Belt </small></Card.Title>
        <Card.Text>
          <div className='iconstar'>
        <FontAwesomeIcon  icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        </Card.Text>
        <Card.Text>$49.00</Card.Text>
        </div>
      </Card>

      <Card className="border-0 mb-3 me-3 shadow" style={{ width: "30%" }}>
        <Card.Img src="/Images/product-1-2.jpg" style={{ height: "200px" }} />
        <div className='ps-3'>
        <Card.Title className='pt-3'><small>Black Fancy Sandal </small></Card.Title>
        <Card.Text className='iconstar'>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </Card.Text>
        <Card.Text>$1,500</Card.Text>
        </div>
      </Card>

      <Card className="border-0 mb-3 me-3 shadow" style={{ width: "30%" }}>
        <Card.Img src="/Images/product-2.jpg" style={{ height: "200px" }} />
        <div className='ps-3'>
        <Card.Title className='pt-3'><small>Brown Formal Shoulder Bag </small></Card.Title>
        <Card.Text className='iconstar'>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </Card.Text>
        <Card.Text>$3,105</Card.Text>
        </div>
      </Card>

      <Card className="border-0 mb-3 me-3 shadow" style={{ width: "30%" }}>
        <Card.Img src="/Images/product-11-2.jpg" style={{ height: "200px" }} />
        <div className='ps-3'>
        <Card.Title className='pt-3'><small>Beige Formal Hand Bag </small></Card.Title>
        <Card.Text className='iconstar'>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </Card.Text>
        <Card.Text>$5,785</Card.Text>
        </div>
      </Card>

    </div>
    </Container>
    </Container>
    </>
  );
};

export default CardComponent;
