import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Col, Form, Row} from "react-bootstrap";
import './NavigationBar.css';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        // Redirect to the Book List page with the search query as a query parameter
        navigate(`/book?title=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <Navbar className="navbar navbar-light">
            <Container>
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/book">Book List</Nav.Link>
                    <Nav.Link href="/review">Review List</Nav.Link>
                </Nav>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search Books"
                                className=" mr-sm-2"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

        </Navbar>

    );
}

export default NavigationBar;

