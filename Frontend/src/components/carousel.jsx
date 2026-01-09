import React, { useState } from "react";
import { Button, Carousel, Col, Container, Form, Row } from "react-bootstrap";
import PostAd from "./postAd";
import { useNavigate } from "react-router-dom";

function  Carousels () {

  const [showPostAd, setShowPostAd]= useState(false);
  let navigate = useNavigate()
  return (
    <>
    <Carousel slide={false}>
    <Carousel.Item>
        <img 
        className="slideimage"
        src = "./images/h-06.jpg"
        alt="Second slide"
        style={{width:'100%' , height:'500px',objectFit:'cover'}}
        />
        <Carousel.Caption style={{marginBottom:'8.5rem',marginRight:'24rem'}}>
               <h3>Shift Into Gear: <br />Your Destination <br/> For Car Excellence</h3>
               <p style={{marginLeft:'6rem'}}> Drive Your Dream: Find Your Perfect Car Today</p>
               <div style={{display: 'flex', justifyContent:'center',marginTop:'20px'}}>
                  <Button variant="success" style={{marginRight:'10px'}}onClick={()=>navigate(`search-results`)}> Search A Car</Button>
                  <Button variant="primary" onClick={()=> setShowPostAd (true)}>Post Advertisement</Button>
               </div>
        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img 
        className="d-block w-100"
        src = "./images/h-04.jpg"
        alt="Second slide"
        style={{width: '1500px',height:'500px',objectFit:'cover'}}
        />
        <Carousel.Caption style={{marginBottom:'8.5rem',marginRight:'24rem'}}>
               <h3>Shift Into Gear: <br />Your Destination <br/> For Car Excellence</h3>
               <p style={{marginLeft:'6rem'}}> Drive Your Dream: Find Your Perfect Car Today</p>
               <div style={{display: 'flex', justifyContent:'center',marginTop:'20px'}}>
                  <Button variant="success" style={{marginRight:'10px'}} onClick={()=>navigate(`search-results`)}> Search A Car</Button>
                  <Button variant="primary" onClick={()=> setShowPostAd (true)}>Post Advertisement </Button>
               </div>
        
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    {/* Model */}
    <PostAd show={showPostAd} handleClose={()=> setShowPostAd(false)}/>


    </>
    
  );
}

export default Carousels;