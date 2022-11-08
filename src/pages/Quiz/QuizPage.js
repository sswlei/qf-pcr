import React, { Component } from 'react';
import Quiz from "../../components/Quiz/Quiz";
import { Container } from 'react-bootstrap';
import NavBar from '../../components/General/NavBar';

const QuizPage = () => {
    return (
        <>
            <NavBar></NavBar>
            <Container className="my-5">
                <Quiz></Quiz>
            </Container>
        </>

    )
}

export default QuizPage;