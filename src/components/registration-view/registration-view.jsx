import './registration-view.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ Birthdate, setBirthdate ] = useState('');
    const [ UsernameErr, setUsernameErr ] = useState('');
    const [ PasswordErr, setPasswordErr ] = useState('');
    const [ emailErr, setemailErr ] = useState('');
    const [ BirthdateErr, setBirthdateErr ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onRegistration(username);
    };

    return (
        <Form className="form">
            <h3>Sign Up</h3>

            <Form.Group className="form-group">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="form-group">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="form-group">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
            </Form.Group>

            <button variant="primary" type="submit" onClick={handleSubmit}>Submit</button>
            <p className="forgot-password text-right">
                Already registered? <a href="#">sign in</a>
            </p>
        </Form>
    );
}

RegistrationView.propTypes = {
    onRegistration: PropTypes.func.isRequired,
};