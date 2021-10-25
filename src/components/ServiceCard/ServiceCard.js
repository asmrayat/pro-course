import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const { name, id, price, img, about } = props.service;
    return (
        <div className="col-4 mt-3 ">
            <Card>
                <Card.Img className="customImg2" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-dark">Price : {price}</small>
                </Card.Footer>
            </Card>

        </div>

    );
};

export default ServiceCard;