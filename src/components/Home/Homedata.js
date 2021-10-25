import React, { useEffect, useState } from 'react';
import './Home.css';
import { Card, CardGroup, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import Infos from '../Infos/Infos';
import Button from '@restart/ui/esm/Button';

const Home = () => {
    const [Homedata, setHomedata] = useState([]);
    useEffect(() => {
        fetch('./courseInfo.json')
            .then(res => res.json())
            .then(data => setHomedata(data));

    }, [])
    return (
        <div className="d-flex cHome mt-5">
            <div className="container px-4">
                <h1 className="text-white">Latest Course</h1>
                <div class="row gx-5">
                    {
                        Homedata.map(Home => <Infos
                            key={Home.key}
                            Home={Home}
                        ></Infos>)
                    }
                </div>
            </div>
            <div className="customDiv">
                <h1 className="text-white">Watch Our Youtube Video</h1>
                <>
                    <Card className="mt-4">

                        <Card.Body >
                            <Card.Text >
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/xhG2AeyJXcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/7gzXIsLyucE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
            </div>
        </div>
    );
};

export default Home;