import React from 'react'
import { Container, Tab, Nav, Col, Row } from 'react-bootstrap'
import commis1 from '../assets/commis1.jpg'

export default function About() {
    return (
        <Container>
            <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Team</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="first">
                                <img
                                    src={commis1}
                                />
                                <p>
                                    aldkfjad;lkfajdoadi
                                    aldkafj;oidjfa
                                    a;lskdjfapsjfa[sdfigjasdf
                                    asldfkajsdfiajdlfka;sjkdfalksdfja
                                    akdjfas[dj]]
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img
                                    src={commis1}
                                />
                                <p>
                                    aldkfjad;lkfajdoadi
                                    aldkafj;oidjfa
                                    akdjfas[dj]]
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>

            </Tab.Container>
        </Container>
    )
}