import React, { useEffect } from "react";
import Dat from './Dat';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


//context api
//redux

function Add() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('Cart')))
    }, [])
    

    return (
        <>
            {data.map((values) => {
                const {  id,price, name, image, quantity } = values;
                return (

                    <div >
                        <Card >
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <p>Price: {price}</p>
                                <button>-</button>
                                <p>Quantity: {quantity}</p>
                                <button>+</button>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>




                        </div>
                );
            })}
        </>

    )
}

export default Add;