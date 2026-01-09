
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import leaflet marker icons without require
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix leaflet default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Map center position (Lahore)
const position = [31.5204, 74.3587];

function Contact() {
  return (
    <>
      {/* Top Banner Image */}
      <div className="image-container">
        <img 
          className="d-block w-100"
          src="./images/4.jpg"
          alt="First slide"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="text-overlay">
          <div className="green-bracket"></div>
          <h1>Contact</h1>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-center m-4">Contact For Any Query</h2>

      {/* Contact Info Boxes */}
      <Row className="m-2">
        <Col md={4}>
          <Container fluid className="m-2 bg-light text-dark p-3 d-flex align-items-center">
            <div className="icon-box d-flex justify-content-center align-items-center">
              <FaMapMarkerAlt className="text-success" />
            </div>
            <span className="ms-2">Gulberg 3, Lahore</span>
          </Container>
        </Col>

        <Col md={4}>
          <Container fluid className="m-2 bg-light text-dark p-3 d-flex align-items-center">
            <div className="icon-box d-flex justify-content-center align-items-center">
              <FaEnvelope className="text-success" />
            </div>
            <span className="ms-2">evs@gmail.com</span>
          </Container>
        </Col>

        <Col md={4}>
          <Container fluid className="m-2 bg-light text-dark p-3 d-flex align-items-center">
            <div className="icon-box d-flex justify-content-center align-items-center">
              <FaPhone className="text-success" />
            </div>
            <span className="ms-2">0300 1 397 789</span>
          </Container>
        </Col>
      </Row>

      {/* Contact Form + Map Section */}
      <Container fluid className="mt-4 p-4 bg-light shadow">
        <Row className="m-2">
          {/* Map */}
          <Col md={6}>
            <div style={{ height: '320px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
              <MapContainer 
                center={position} 
                zoom={13} 
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false} // Optional: disable scroll zoom
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>Gulberg 3, Lahore</Popup>
                </Marker>
              </MapContainer>
            </div>
          </Col>

          {/* Form */}
          <Col md={6}>
            <p>
              For any inquiries, assistance, or feedback, please fill out our contact form below.
              Our team is committed to responding promptly to ensure your experience with Pakclassified is exceptional.
            </p>

            <Row>
              <Col md={6}>
                <Form.Control type="text" placeholder="Your Name" className="mb-2" />
              </Col>
              <Col md={6}>
                <Form.Control type="email" placeholder="Your Email" className="mb-2" />
              </Col>
            </Row>

            <Form.Control type="text" placeholder="Subject" className="mb-2" />
            <Form.Control as="textarea" rows={3} placeholder="Leave a message here" className="mb-3" />
            <Button variant="success" className="w-100">
              Send Message
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
