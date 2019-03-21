import React, { Component } from 'react';
import Container from './Container';
import Form from './Form';

const HomeDumb = () => {
    return(
        <Container>
            <Form handlerFromParant={this.props.handlerFromParant}/>
        </Container>
    )
}

export default HomeDumb;