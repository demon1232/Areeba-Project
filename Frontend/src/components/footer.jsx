import React from "react";
import{Container,Row,Col,Form,InputGroup,Button} from "react-bootstrap"
import {FaMapMarkedAlt,FaPhoneAlt,FaEnvelope,FaFacebook,FaTwitter, FaYoutube} from'react-icons/fa'
import { FaLinkedin } from "react-icons/fa6";

function Footer() {

  return (      
    <>
    <footer style={{backgroundColor:'#343a40',padding:'20px 0',color:'#fff'}}>
      <Container>
        <Row className="mt-5">
          {/* Company Section */}
          <Col md={3}>
            <h5>Company</h5>
            <p className="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vime elit libero a pharetra augue.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul style={{listStyle:'none',padding:0,color:'#fff',textDecoration:'none'}}>
              <li><a href="/about"  style={{color:'#fff',textDecoration:'none'}}>&gt;About Us</a></li>
              <li><a href="/contact" style={{color:'#fff',textDecoration:'none'}}>&gt;Contact Us</a></li>
              <li><a href="/privacy" style={{color:'#fff',textDecoration:'none'}}>&gt;Privacy Policy</a></li>
              <li><a href="/terms"style={{color:'#fff',textDecoration:'none'}}>&gt;Terms & Conditions</a></li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col md={3}>
            <h5>Contact</h5>
            <address className="small">
             <p><FaMapMarkedAlt/> Ferozepur Road, Gulberg III, Lahore</p> 
               <p><FaPhoneAlt/> 0300 1 387 387</p> 
                 <p><FaEnvelope/> evs@gmail.com</p> 
            </address>

            
                {/* Social Media Links Below Contact Info */}
<div className="mt-3 pt-2 border-top">
  <Container 
    className="bg-secondary bg-opacity-25 p-3 rounded" 
    style={{ 
      margin: '15px 0',
      border: '1px solid rgba(255,255,255,0.1)'
    }}
  >
    <div className="d-flex gap-3 justify-content-center">
      <a  href="#" style={{color:'#fff',margin:'0 5px'}} > <FaFacebook /></a>
      <a  href="#" style={{color:'#fff',margin:'0 5px'}} > <FaYoutube /></a>
      <a  href="#" style={{color:'#fff',margin:'0 5px'}} > <FaLinkedin/></a>
    </div>
   
  </Container>
</div>
           
</Col>


{/* Newsletter */}
<Col md={3}>
  <h5 className="mb-3">
    <FaEnvelope className="me-2" />
    Newsletter
  </h5>
  <p className="small text-white">
    Subscribe to our newsletter for the latest updates and news
  </p>
  <Form>
    <InputGroup >
      <Form.Control
        type="email"
        placeholder="Enter email "
        style={{backgroundColor:'#343a40',color:'white',border:'1px solid #555'}}
      />
      <Button  variant="success" type="submit" >Sign Up</Button>
    </InputGroup>
       </Form>
      </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-4 pt-3 border-top">
          <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
            <p className="small me-3"> © PakClassified. All Rights Reserved. Designed by Team EVS </p>  
          </Col>
          <Col md={6} className="text-center text-md-start">
            <div className="d-flex gap-3 justify-content-end">
              <a href="/" className="text-white text-decoration-none small">Home</a>
              <a href="/cookies" className="text-white text-decoration-none small">Cookies</a>
              <a href="/help" className="text-white text-decoration-none small">Help</a>
              <a href="/faq" className="text-white text-decoration-none small">FAQs</a> 
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
}

export default Footer;