import React, {useEffect,useState} from "react";
import { Button,Modal,Form } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import{ user } from "../slices/signup.slice";


const Signup = ({show,handleClose})=>{
 
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let [birthDate,setBirthDate] = useState("")
    let [contactNumbers,setContact] = useState("")
    let [image,setImage] = useState(null)
    let [preview,setPreview] = useState(null)


    const handleFileChange = (e) => {
      // const file = e.target.files[0];
      // setImage(file);
      // setPreview(URL.createObjectURL(file));
      const file = e.target.files[0];
      if (file) {
        setImage(file); // just the file, not an object
      }
      setPreview(URL.createObjectURL(file));
    }


    let dispatch = useDispatch()
    // const {data} = useSelector((state)=> state.Signup);
  
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const signupData = new FormData();
        signupData.append('name',name)
        signupData.append('email',email)
        signupData.append('password',password)
        signupData.append('birthDate',birthDate)
        signupData.append('contactNumbers',contactNumbers)
        signupData.append('image',image)
        console.log("Sending data:", signupData);
        dispatch(user(signupData));
        handleClose();
    };

    return(
        <>
          {/* Sign Up Modal */}
      <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className=' text-success fw-bold'>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="scrollable-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control type="date"  onChange={(e)=>setBirthDate(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control placeholder="Enter Contact Number" onChange={(e)=>setContact(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" accept="image/*"  onChange={handleFileChange} />
            {preview && <img src={preview} alt = "Preview" width= "100"/>}
          </Form.Group>

          <Button variant="primary" type='submit'>Sign Up</Button>

        </Form>
      </Modal.Body>
    </Modal>
    </>


    );


};
 export default Signup;