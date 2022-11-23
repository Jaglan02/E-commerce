import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dat from './Dat';
import { useEffect, useState } from 'react';
// import Add from './Add';


function Page() {
    const [data, setData] = useState(Dat);
    const [itemId, setItemId] = useState([]);
    const filterResult = (catItem) => {
        const result = Dat.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    };
    const addToCart =(id) =>{
        let oldVal = JSON.parse(localStorage.getItem('Cart'))
        if(oldVal==null)
        {
            oldVal = [];
        }
        oldVal.push(id);
        localStorage.setItem('Cart', JSON.stringify(oldVal));
        // setData([...data, {...dat, quantity : 1}])
    }
    
    // useEffect(() => {
    // }, [itemId])
    
    return (
        <>
            <Container>
                <Row style={{ margin: "50px" }}>
                    <Col sm={3}>
                        <button type="button" className="btn btn-warning w-100 mb-4" onClick={() => filterResult('MobilePhone')}>MobilePhone</button>
                        <button type="button" className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Watch')}>Watch</button>
                        <button type="button" className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Charger')}>Charger</button>
                        <button type="button" className="btn btn-warning w-100 mb-4" onClick={() => filterResult('EarPhone')}>EarPhone</button>
                    </Col>
                    <Col sm={9}>
                        <Row>
                            {data.map((values) => {
                                const { id, price, name, image } = values;
                                return (
                                    <>
                                        <Col sm={4} style={{ marginBottom: "20px" }} key={id}>
                                            <Card>
                                                <Card.Img variant="top" src={image} />
                                                <Card.Body>
                                                    <Card.Title>{name}</Card.Title>
                                                    <p>Price: {price}</p>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the
                                                        bulk of the card's content.
                                                    </Card.Text>
                                                    <Button variant="dark" onClick={()=>addToCart(values)}>Add to Cart</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>



                                    </>
                                );
                            })}

                        </Row>
                    </Col>

                </Row>
                
            </Container>
        </>
    );
}
export default Page