import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button} from 'react-bootstrap';
import { GoArrowRight } from 'react-icons/go';
import { useState,useEffect } from 'react';
import{ Link, useNavigate} from 'react-router-dom'
import Signup from "./signup";
import Login from "./login";
import PostAd from './postAd';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/login.slice';


function Navigationbar() {
  let [catdata, setCatdata] = useState([])
  useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch("http://localhost:5000/api/v1/categories");
         const result = await response.json();
         setCatdata(result);
       } catch (err) {
         console.log(err);
       }
     };
     
     fetchData();
   }, []);

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin]= useState(false);
  const [showPostAd, setShowPostAd]= useState(false);
  const {loggedIn,data}= useSelector((state)=>state.Login);
  const user = data?.currentUsers

  const handleLogout = () =>{
    dispatch(logout());
    navigate("/");
  };
 

  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='text-success fw-bold'>PakClassified</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{marginLeft: '21rem'}}>
            <Nav.Link onClick={() => navigate(`/`)}>Home</Nav.Link>
            <Nav.Link onClick={()=> navigate(`/about`)}>About</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
                {catdata.map((cat)=>(
                   <NavDropdown.Item onClick={() => navigate(`/categories/${cat._id}`)}>{cat.name}</NavDropdown.Item>
                ))

                }
              </NavDropdown>
            <Nav.Link onClick={()=>navigate(`/contact`)}>Contact</Nav.Link>

            {loggedIn?
            (<> <Button  type ="button"className="bg-success" onClick={()=> setShowPostAd (true)}>Post Advertisements<GoArrowRight/> </Button>
            <Button className=" mx-2 bg-danger" onClick={handleLogout}>Logout</Button>

            <Link to="/userdashboard">

            <img 
            style={{
              height:"45px",
              width:"45px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "2px solid #ddd",
            }
          }
          //user.image dikh rahi	Image server/frntend pe se aa rahi
            src={`http://localhost:5000/public/images/${user?.image}`}
            alt="Profile"
            className='ms-1'/>
            </Link>
            </>

          ):(
          <> 
          <Button className="mx-2 bg-success" onClick={()=> setShowLogin (true)}>Login </Button>
            <Button className="bg-success" onClick={()=> setShowSignUp (true)}>Sign Up </Button>
            </>)} 
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Models */}
    <Signup show={showSignUp} handleClose={()=> setShowSignUp(false)}/>
    <Login show={showLogin} handleClose={()=> setShowLogin(false)}/>
    <PostAd show={showPostAd} handleClose={()=> setShowPostAd(false)}/>


</>
)
}

export default Navigationbar;