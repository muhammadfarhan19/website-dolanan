import {Card, Container, Row, Col, Image} from "react-bootstrap";
import inception from "../assets/img/trending/inception.jpeg"
import danur from "../assets/img/trending/danur.jpeg"
import pengabdi from "../assets/img/trending/pengabdi.jpeg"
import raid from "../assets/img/trending/raid.jpeg"
import fast from "../assets/img/trending/fast.jpeg"
import habibi3 from "../assets/img/trending/habibi3.jpeg"

const Trending = () => {
    return (
        <div id="trending">
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={inception} alt="Inception"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">INCEPTION</Card.Title>
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
                            <Image src={danur} alt="Danur 1"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">DANUR 1</Card.Title>
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
                            <Image src={pengabdi} alt="Pengabdi Setan"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">PENGABDI SETAN</Card.Title>
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
                            <Image src={raid} alt="The Raid 2"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">THE RAID 2</Card.Title>
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
                            <Image src={fast} alt="Fast and Furious 6"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">FAST AND FURIOUS</Card.Title>
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
                            <Image src={habibi3} alt="Habibie dan Ainun 3"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">HABIBIE AINUN 3</Card.Title>
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

export default Trending