import './registration-view.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if(isReq) {
            /* Send request to the server for authentication */
            axios.post('https://calem-test-api.herokuapp.com/users', {
                Username: username,
                Password: password,
                Email: email,
                Birthday: birthday,
            })
                .then(response => {
                    const data = response.data;
                    console.log(data);
                    alert('Registration successful, please login!');
                    window.open('/', '_self');
                })
                .catch(response => {
                    console.error(response);
                    alert('Unable to register');
                });
        }
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
                Already registered? <Link to="/login"><a href="#">sign in</a></Link>
            </p>
        </Form>
    );
}

RegistrationView.propTypes = {
    register: PropTypes.shape({
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
    onRegistration: PropTypes.func,
  };