import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';

export default function Contacts() {
    return (
        <Container style={{ width: '500px'}}>
            <h1 className="text-center"> Contacts us </h1>
            <Form>
                <Form.Group controllId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text>
                        We'll
                    </Form.Text>
                </Form.Group>

                <Form.Group controllId="formBasicPassword">
                    <Form.Label>example text</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Form.Group controllId="formBasicCheckBox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
