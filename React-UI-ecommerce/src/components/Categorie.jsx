import { Card , Container , Button} from 'react-bootstrap';

const Categorie = () =>{
    return(
        <>
        <div>
            <img src="/Images/banner-top.jpg" alt="Banner1" srcset="" className="mb-3"/>

        </div>
        <Container>

            

        <div className="d-flex">
    
          <Card className="text-center mb-3 me-3" style={{ width: "30%" }}>
            <Card.Img src="/Images/product-1-2.jpg" style={{ height: "200px" }} />
            <Card.Title>Blue High Hill</Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Card.Text>
            <Card.Text>$49.00</Card.Text>
            <Button> Quick View</Button>
          </Card>
    
          <Card className="text-center mb-3  me-3" style={{ width: "30%" }}>
            <Card.Img src="/Images/product-2.jpg" style={{ height: "200px" }} />
            <Card.Title>Brown Backpack</Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Card.Text>
            <Card.Text>$49.00</Card.Text>
            <Button> Quick View</Button>
          </Card>
    
          <Card className="text-center mb-3  me-3" style={{ width: "30%" }}>
            <Card.Img src="/Images/product-4.jpg" style={{ height: "200px" }} />
            <Card.Title>High Hill Casual</Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Card.Text>
            <Card.Text>$49.00</Card.Text>
            <Button> Quick View</Button>
          </Card>
    
          <Card className="text-center mb-3  me-3" style={{ width: "30%" }}>
            <Card.Img src="/Images/product-5.jpg" style={{ height: "200px" }} />
            <Card.Title>Travel Bag</Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Card.Text>
            <Card.Text>$49.00</Card.Text>
            <Button> Quick View</Button>
          </Card>
    
        </div>

        <div className="d-flex">
    
          <Card className="text-center mb-3 me-3" style={{ width: "30%" }}>
            <Card.Img src="/Images/product-6.jpg" style={{ height: "200px" }} />
            <Card.Title>Brown Long Shoes</Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Card.Text>
            <Card.Text>$49.00</Card.Text>
            <Button> Quick View</Button>
          </Card>
    
          <Card className="text-center mb-3  me-3" style={{ width: "30%" }}>
            <Card.Img src="/Images/product-8-2.jpg" style={{ height: "200px" }} />
            <Card.Title>Black Men Casual Glasses</Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Card.Text>
            <Card.Text>$49.00</Card.Text>
            <Button> Quick View</Button>
          </Card>
    
          <Card className="text-center mb-3  me-3" style={{ width: "30%" }}>
            <Card.Img src="/Images/product-1-2.jpg" style={{ height: "200px" }} />
            <Card.Title>Blue High Hill</Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Card.Text>
            <Card.Text>$49.00</Card.Text>
            <Button> Quick View</Button>
          </Card>
    
          <Card className="text-center mb-3  me-3" style={{ width: "30%" }}>
            <Card.Img src="/Images/product-2.jpg" style={{ height: "200px" }} />
            <Card.Title>Brown Backpack</Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Card.Text>
            <Card.Text>$49.00</Card.Text>
            <Button>Quick View</Button>
          </Card>
    
        </div>
        </Container>
        </>
    )
}

export default Categorie;