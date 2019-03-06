import React from 'react';
import {ProgressBar, Form, Container} from 'react-bootstrap';
import './style.css';

import {strengthIndicator, strengthColor, getVariant} from './strength-password';

export default function PasswordInput(props) {

    const strength = strengthIndicator(props.value);
    const color = strengthColor(strength);
    const variant = getVariant(strength);

    return (
        <Container>            
            <Form>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    value={props.value}
                    className='password-input'
                    placeholder={props.placeholder}
                    onChange={props.handleChanges}  
                    style={{
                        borderColor: color
                    }}
                />
                </Form.Group>
                <ProgressBar min={0} max="4" variant={variant} now={strength} /> 
            </Form>          
        </Container>
                    
    )
}