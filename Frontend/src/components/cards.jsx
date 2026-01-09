import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cards(){

    const [data, setData] = useState([]);
     const navigate = useNavigate()
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/v1/categories");
          const result = await response.json();
          setData(result);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);
    
    return (
        <>
          <h1 className="text-success fw-bold text-center my-3">Explore By Categories</h1>
          <Row className=" mx-1 d-flex flex-wrap">
            {data.map((card) => (
              <Col className=" col-md-3 col-sm-6">
                <Card className='mt-3' onClick={()=>{navigate(`/categories/${card._id}`)}}>
                   <Card.Img
                    variant="top"
                    src={`http://localhost:5000/public/images/${card.image}`}
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text className="text-success fw-bold">{card.quantity}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      );
    
   
}
export default Cards;