import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Infos.css';

const Infos = (props) => {
    const { name, id, img, price, about } = props.Home;
    return (


        <div class="col-6 mt-3">
            <Card>
                <Card.Img className="customImg" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-dark font-weight-bold">Price : {price}</small>
                </Card.Footer>
            </Card>
        </div>



    );
};

export default Infos;