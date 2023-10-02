import "../cssFiles/product.css";
import ShippingDetail from "./ShippingDetail";
import CardComponent from "./Card";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBagShopping,
  faCircleCheck,
  
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter ,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons";
const Product = () =>{
    return(
      <>
      <Container className=" mt-4">
    <div className=" d-flex ">
      <div className=" ">
      <img className="product-image"  src="/Images/product1.jpg" alt="ProductImage"/>
  
      
  
      <div className=" d-flex mt-2 mb-4 list-unstyled product-image justify-content-around">
        <li><img className="Product-subImage" src="/Images/product1.jpg" alt="ProductImage"/></li>
        <li><img className="Product-subImage" src="/Images/product2.jpg" alt="ProductImage"/></li>
        <li><img className="Product-subImage" src="/Images/product3.jpg" alt="ProductImage"/></li>
        <li><img className="Product-subImage" src="/Images/product3.jpg" alt="ProductImage"/></li>
      </div>
      
      </div>

    <div className=" ps-3">
      <h1><b><small>Men Black Sports Shoes</small></b></h1>
      <div className="pb-2">
      <FontAwesomeIcon className="iconstar" icon={faStar} />
      <FontAwesomeIcon className="iconstar" icon={faStar} />
      <FontAwesomeIcon className="iconstar" icon={faStar} />
      <FontAwesomeIcon className="iconstar" icon={faStar} />
      <FontAwesomeIcon  className="iconstar"icon={faStar} />
      </div>
      <h4 className="product-price">$99.99</h4>
      <p className="product-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
      <label className="text-muted " for="color"><b>COLOR:</b></label>
  <select className="colordropdown outlineremove  p-3 text-muted  "> 
    <option value="CHOOSE AN OPTION ">CHOOSE AN OPTION</option>
    <option>Black</option>
    <option>Blue</option>
    <option>Red</option>
  </select>
<br/>
<label className="text-muted" for="size"><b>SIZE:</b></label>
  <select className="sizedropdown dropdownSize outlineremove text-muted  p-3   mt-2 mb-4"> 
    <option value="CHOOSE AN OPTION"><small>CHOOSE AN OPTION</small></option>
    <option>Large</option>
    <option>Medium</option>
    <option>Small</option>
  </select>
  <br/>
  <hr/>
      <button className="btn pt-3 pb-3 pe-5 ps-5 bg-secondary text-white"><b> <FontAwesomeIcon className="pe-2" icon={faBagShopping} bounce />ADD TO CARD</b></button>
      <hr/>
      <div className="list-unstyled ">
      
            <FontAwesomeIcon className="pe-2  iconDetailPage"  icon={faFacebook} />
            <FontAwesomeIcon className="pe-2 iconDetailPage" icon={faInstagram} />
            <FontAwesomeIcon  className="pe-2 iconDetailPage" icon={faTwitter} />
            <FontAwesomeIcon className="pe-2 iconDetailPage" icon={faGooglePlus} />
            <FontAwesomeIcon  className="pe-2 iconDetailPage" icon={faEnvelope} />
          
          </div>
    </div>
    </div>

<div>
    <div>
      <h6 className="mt-4 text-muted">DESCRIPTION</h6>
      <hr/>
      <p className="pt-3 text-muted fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
    </div>

    <div>
      <div className="d-flex"> 
        <div  className="text-muted mt-5 fs-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

          <ul className="list-unstyled text-muted mt-5">
            <li className="pb-4 fs-6"><FontAwesomeIcon className="pe-3"  icon={faCircleCheck} />Any Product types that You want - Simple, Configurable</li>
            <li className="pb-4 fs-6"><FontAwesomeIcon className="pe-3" icon={faCircleCheck} />Downloadable/Digital Products, Virtual Products</li>
            <li className="pb-4 fs-6"><FontAwesomeIcon  className="pe-3" icon={faCircleCheck} />Inventory Management with Backordered items</li>
          </ul>
        </div>
        <div className="" >
          <img className="imageDescription " src="/Images/productDescription.png" alt="Image12" />
        </div>
      </div>
    </div>

    <div>
    <ShippingDetail />
    </div>
    <div>
      <div className="mt-4">
  <h5>RELATED PRODUCTS </h5>
  <hr/>
</div>
      
    </div>
    </div>
  </Container>
  <div>
  <CardComponent />
  </div>
  </>
    )
}

export default Product;