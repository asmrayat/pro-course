import React from 'react';
import { Card } from 'react-bootstrap';
import './ErrorNotFound.css'

const ErrorNotFound = () => {
    return (
        <div className="error">
            <Card.Img variant=" img-fluid" src="https://www.zergroup.com/view/default/images/404.gif" />
        </div>
    );
};

export default ErrorNotFound;