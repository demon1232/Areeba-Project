import {Button ,Modal , Form} from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import{updatedAd} from "../slices/editinfo.slice";
import  {useState} from "react";
import { FaCalendar, FaPhone, FaUser } from "react-icons/fa";

 const EditForm = ({id,show,handleClose}) =>{
    let [name,setName] = useState ("")
    // let [email,setEmail] = useState ("")
    let [contact,setContact] = useState ("")
    let [birthdate,setBirthdate] = useState ("")

    let dispatch = useDispatch()
    const {data}= useSelector((state)=>state.UpdatedAd);
    const EditData = {
        name,
        // email,
        contact,
        birthdate
    };
    const handleSubmit = async (e)=>{
        e.preventDefault()
        dispatch(updatedAd({"id":id, "updatedData" : EditData }));
        handleClose();
    };
return(
    <>
     {/* Edit Form */}
     <Modal show={show} onHide={handleClose} centered>
     <Modal.Header closeButton style={{ backgroundColor: "#e6f9e6" }}>
       <Modal.Title className="text-success fw-bold">
         <FaUser className="me-2" /> Edit User Information
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <Form>
         <Form.Group className="mb-3">
           <Form.Label className="d-flex align-items-center">
             <FaUser className="text-success me-2" /> Name
           </Form.Label>
           <Form.Control type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)} />
         </Form.Group>
 
         {/* <Form.Group className="mb-3">
           <Form.Label className="d-flex align-items-center">
             <FaEnvelope className="text-success me-2" /> Email
           </Form.Label>
           <Form.Control type="email" placeholder="Enter email" />
         </Form.Group>
  */}
         <Form.Group className="mb-3">
           <Form.Label className="d-flex align-items-center">
             <FaPhone className="text-success me-2" /> Contact Number
           </Form.Label>
           <Form.Control type="tel" placeholder="Enter Contact Number"  onChange={(e)=> setContact(e.target.value)} />
         </Form.Group>
 
         <Form.Group className="mb-4">
           <Form.Label className="d-flex align-items-center">
             <FaCalendar className="text-success me-2" /> Birth Date
           </Form.Label>
           <Form.Control type="date" defaultValue="2024-08-02"  onChange={(e)=> setBirthdate(e.target.value)}/>
         </Form.Group>
 
         {/* <div className="d-flex justify-content-end gap-2"> */}
           <Button variant="secondary"  className="m-3"onClick={handleSubmit}>
             Cancel
           </Button>
           <Button variant="success" onClick={handleSubmit}>
             Save Changes
           </Button>
         {/* </div> */}
       </Form>
     </Modal.Body>
   </Modal>
   </>

);
 };
 export default EditForm;
    
