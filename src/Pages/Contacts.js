import React, {Component, useEffect, useState} from 'react';
import {Button, Container, Form, FormText} from "react-bootstrap";
export default function Contacts() {

    const [email, setEmail] = useState('')
    const [emailDirty, setEmailDirty] = useState( false)
    const [emailError, setEmailError] = useState( 'Email не може бути порожнім')
    const [formValid, setFormValid] = useState(false)

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний email')
        } else {
            setEmailError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
        }
    }

    useEffect ( () => {
        if (emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailError])


        return (
            <Container className="mt-5">
                <Form>
                    <Form.Label className="mt-3 || fw-bold || fs-1">Contact us</Form.Label>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                    {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
                    <Form.Control onChange={e => emailHandler(e)} name="email" value={email} onBlur={e => blurHandler(e)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" type="text"/>
                    </Form.Group>

                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me"/>
                    </Form.Group>

                    <Button disabled={!formValid} variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </Container>
        );
}
