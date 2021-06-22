import React, { Component } from 'react';
import { Button, Row, Image, Accordion, Card, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";


class QuizPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

            data: [
                {
                    'title': " Livebirth aneuploidies for autosome chromosomes are all trisomies", 
                    "type": "tf",
                    "answer": true
                },
                {
                    'title': "The fluorescent label in QF-PCR is present on:",
                    "type": "mcq",
                    "choices": [" the primers", "the nucleotides", "one of the nucleotides", "a and b"],
                    "answer": 0,
                    "feedback": "Correct: by labelling the primers, different labels can be used, allowing for multiplexing"
                }

            ]
        }
    }

    componentDidMount() {
        this.setState({ current: this.state.data[0] });
    }

    render() {


        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="col-12 bg-dark mx-auto d-flex text-white">
                <h3>Quiz</h3>
                
            </div>
        )
    }
}

export default QuizPage;