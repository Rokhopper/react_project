import React, {Component} from 'react';
import {Container, Col, Row, Card, ListGroup, Nav} from "react-bootstrap";
class Blog extends Component {
    render() {
        return (
            <Container className="mt-5">
            <Row>
                <Col md="9">
                    <div className="d-flex align-items-center mt-5">
                        <div className="flex-shrink-0">
                            <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://media.contentapi.ea.com/content/dam/gin/images/2019/01/apex-legends-keyart.jpg.adapt.crop1x1.767p.jpg"
                            alt="photo" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <Nav.Link href="/"><h5>Apex Legends</h5></Nav.Link>
                            <p>
                                Apex Legends: Revelry. Drop in and be legendary with new Team Deathmatch,
                                remastered Legend classes, the Nemesis rifle and more!
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-5">
                        <div className="flex-shrink-0">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://media.contentapi.ea.com/content/dam/gin/images/2022/06/star-wars-jedi-survivor-keyart.jpg.adapt.crop1x1.767p.jpg"
                                alt="photo" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <Nav.Link href="/"><h5>STAR WARS Jedi: Survivor™</h5></Nav.Link>
                            <p>
                                The story of Cal Kestis continues in STAR WARS Jedi: Survivor™,
                                an epic new adventure that will push Cal further than ever as he fights to protect the galaxy from descending into darkness.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-5">
                        <div className="flex-shrink-0">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://media.contentapi.ea.com/content/dam/gin/images/2018/05/bfv-campaignart-standard-large.jpg.adapt.crop1x1.767p.jpg"
                                alt="photo" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <Nav.Link href="/"><h5>Battlefield V</h5></Nav.Link>
                            <p>
                                Battlefield V Definitive Edition is The Best Way to Enter the Fray
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <h5 className="text-center mt-5">Категорії</h5>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>EA News</ListGroup.Item>
                            <ListGroup.Item>EA Play</ListGroup.Item>
                            <ListGroup.Item>Apex Legends</ListGroup.Item>
                            <ListGroup.Item>The Sims 4</ListGroup.Item>
                            <ListGroup.Item>Battlefield</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card className="mt-3 bg-light">
                        <Card.Body>
                            <Card.Title>Slide widget</Card.Title>
                            <Card.Text>
                                Lorem
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        );
    }
}
export default Blog;