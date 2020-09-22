import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const Error = ({ message }) => {

    return (
        <Container>
            <Alert variant="danger" className="mt-5">
                <Alert.Heading>Error</Alert.Heading>
                <p>{message}</p>
            </Alert>
        </Container>
    );
}

export default Error;