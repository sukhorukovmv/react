import React from "react";
import logo from "./img/logoKom.jpg";
import arrow2 from "./img/arrow2.png";
import { NavLink } from "react-router-dom";
import "./Header.style.css"
/*
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
*/

export default function Header() {
    return (
        <header className="header">
            <div className="header__wrap wrap">
                <div className="header__top">
                    <div className="header__logo logo">
                        <a className="logo__link" href="#">
                            <img className="logo__img" src={logo} alt="Логотип"></img>
                        </a>
                    </div>
                    <nav className="header__menu menu">
                        <div className="menu__list">
                            <div className="menu__item">
                                <NavLink to="/registration">Регистрация</NavLink>
                            </div>
                            <div className="menu__item">
                                <NavLink to="/access" >Вход</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="header__info">
                    <h1 className="header__title">
                        Комиссионный магазин
                    </h1>
                    <p className="header__text">
                        <a className="header__link" href="#">Спеши купить</a>
                    </p>
                </div>
{
 //               <a className="header__btn" href="#content">
 //                   <img className="header__arrow" srs={arrow2} alt="Перейти ниже"></img>
 //               </a>
}
            </div>
        </header>
    )
}