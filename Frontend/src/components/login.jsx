// import React, {useEffect,useState} from "react";
// import { Button,Modal,Form } from "react-bootstrap";
// import { useDispatch,useSelector } from "react-redux";
// import{ login } from "../slices/login.slice";

// const Login = ({show,handleClose})=>{
 
//     let [email,setEmail] = useState("")
//     let [password,setPassword] = useState("")
   
//     let dispatch = useDispatch()
//     const {data} = useSelector((state)=> state.Login);
//     const loginData = {
    
//         email,
//         password,
       
//     };
//     const handleSubmit = async(e) =>{
//         e.preventDefault()
//         dispatch(login(loginData));
//         handleClose();
//     };

//     return(
//         <>
//           {/* Login Modal */}
//    <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title className='text-success fw-bold'>Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
//             </Form.Group>
//             <Button variant="primary" type='submit' onClick={handleSubmit}>Login</Button>
//           </Form>  
//         </Modal.Body>
//       </Modal>
//     </>


//     );


// };
//  export default Login;


import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/login.slice";

const Login = ({ show, handleClose }) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState(""); // for error message

  let dispatch = useDispatch();
  const { data } = useSelector((state) => state.Login);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    setError(""); // Clear previous error
    const loginData = { email, password };
    dispatch(login(loginData));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-success fw-bold">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
