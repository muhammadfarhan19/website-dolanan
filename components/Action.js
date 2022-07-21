import {Card, Container, Row, Col, Image} from "react-bootstrap";
import antman from "../assets/img/action/antman.jpeg"
import avanger from "../assets/img/action/avanger.jpeg"
import captain from "../assets/img/action/captain.jpeg"
import deadpool from "../assets/img/action/deadpool.jpeg"
import thor from "../assets/img/action/thor.jpg"
import xmen from "../assets/img/action/xmen.jpeg"

const Action = () => {
    return (
        <div id="action">
            <Container>
                <br/>
                <h1 className="text-white">ACTION MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={antman} alt="Ant Man" className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ANT MAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={avanger} alt="Avanger" className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">AVANGERS</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={captain} alt="Captain America" className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">CAPTAIN AMERICA</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={deadpool} alt="Deadpool" className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">DEADPOOL</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={thor} alt="Thor" className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">THOR</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={xmen} alt="X Men" className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">X MEN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Action