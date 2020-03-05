import React from 'react';
import { Navbar, Nav, Container, FormControl, Form, Button } from 'react-bootstrap';
import logo from './logo192.png'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Blog from '../pages/Blog';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="/" >
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block aligh-top"
                        /> React site
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>
                        <Form inline >
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>
            </Router>
        </div>
    );
}

export default Header;