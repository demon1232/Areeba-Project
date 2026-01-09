import {useEffect, useState } from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 import{deleteAd} from "../slices/postAd.slice";
import EditForm from './profileditform';
import EditPostForm from './editpostform';
import { addListener } from '@reduxjs/toolkit';


function Userdashboard() { 
  const [showEdit, setShowEdit] = useState(false);
  const [showPostEdit, setShowPostEdit] = useState(false);
  const [selectedAd, setSelectedAd] = useState({});
  let navigate =useNavigate()
  let [user,setUser]= useState({});
  let [ads,setAds]= useState([]);
  let dispatch = useDispatch();
  const { data } = useSelector((state) => state.Login);
  const { loading } = useSelector((state)=>state.Post)
  // console.log("Full Login State:", data);
  const userId = data?.currentUsers?._id;


  // console.log('Found User Id From State:',userId)

  useEffect(()=> {
   const fetchUser = async ()=>{
    try{
      if(!userId)return;
      const response = await fetch(`http://localhost:5000/api/v1/users/uid/${userId}`);
      const  data = await response.json();
      // console.log(data)
      setUser(data);

    }catch(err){
      console.error("Error fetching user profile:",err);
    }
   };
   fetchUser();
},[userId]);
// advertisements
useEffect(()=> {
  const fetchAds = async ()=>{
   try{
     if(!user || !user._id)return;
     const response = await fetch(`http://localhost:5000/api/v1/advertisement`); 
     const  adsData = await response.json();
    //  console.log(adsData)
    //  const filteredAds = adsData.filter((ad)=> ad. postedbyid._id == user._id);
    const filteredAds = adsData.filter((ad)=>ad.postedbyid && ad.postedbyid._id === user._id)
    //  console.log("adv Data::",filteredAds)
     setAds(filteredAds.reverse());
   }catch(err){
     console.error("Error fetching ads:",err);
   }
  };
  fetchAds();
},[user , loading]); //Run only when user state changes


const handleEditClick = (ad) => {
  setSelectedAd(ad);
  setShowPostEdit(true);
};

const handleDelete = (deleteId)=>{
  dispatch(deleteAd(deleteId));
};

  return (

    <>                  
  <div className="row">
        
    <div className="image-container w-100">
        <img className="d-block w-100"
         src="./images/unnamed.png"
         alt="First Slide"
         style={{ height:"200px",objectFit:'cover'}}
          />
         <div className="text-overlay ">
               <div className="green-bracket"></div>
               <h1 >User Dashboard</h1>
         </div>
    </div>

    <Row className="p-2">
  {/* Profile Section */}
  <Col md={4} className='p-3'>
    <Card className="p-3">
      <Card.Img
        variant='top' 
        src={`http://localhost:5000/public/images/${user.image}`} 
        className="mx-auto rounded-circle"
        style={{width:"120px",height:"120px",objectFit:"cover"}}/>
      <Card.Body>
        <h3 className="text-success text-center">{user.name}</h3>
        <hr />
        <Card.Text className="fw-bold">Email: {user.email}</Card.Text>
        <Card.Text className="fw-bold">Contact Number: {user.contactNumbers}</Card.Text>
        <Card.Text className="fw-bold">Birth Date: {user.birthDate && new Date(user.birthDate).toLocaleDateString()}</Card.Text>
        <Button variant="success" className="me-2" onClick={()=> setShowEdit(true)}>Edit Info</Button>
      </Card.Body>
    </Card>
  </Col>

  {/* Post Advertisements Section */}
  <Col md={8}>
                <h2 className="text-success">Post Advertisement</h2>
                {ads.length > 0 ? (
            ads.map((ad) => (
              <Card key={ad._id} className="m-2">
                <Row className="m-1 d-flex align-items-center">
                  <Col md={3} className="text-center">
                    <Card.Img src={`http://localhost:5000/public/images/${ad.image}`} className="img-fluid" 
                       style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                  </Col>
                  <Col md={9}>
                    <Card.Title>{ad.name}</Card.Title>
                    <Card.Text>{ad.description}</Card.Text>
                    <Button variant="danger" className='m-1' onClick={()=> handleDelete(ad._id) }>Delete</Button>
                    <Button className='m-2' onClick={()=>handleEditClick(ad)}>Edit</Button>
                    <Button onClick={()=>{navigate(`/detail/${ad._id}`)}}>View More</Button>
                  </Col>
                </Row>
              </Card>
            ))
          ) : (
            <p>No advertisements.</p>
          )}
  
                </Col>
</Row>
  </div>

    {/* {Models} */}
     <EditForm id={user._id} show={showEdit} handleClose={()=> setShowEdit(false)}/>
     <EditPostForm show= {showPostEdit} handleClose={()=> setShowPostEdit(false)} adId={selectedAd._id} adData={selectedAd}/>
    


    
    </>

  );
}

export default  Userdashboard;