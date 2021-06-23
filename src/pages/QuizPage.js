import React, { Component } from 'react';
import { Button, Row, Form, ListGroupItem, Card, ListGroup } from 'react-bootstrap';
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
            <div style={{ height: '100%' }} className=" mx-auto d-flex flex-column align-items-center mt-5 col-12">

                <Card className="col-9" >
                    <Card.Header className="m-3" as="h5">Quiz</Card.Header>
                  
                        <ol>
                        {this.state.data.map((i, index) => <li> <Card.Body>
                        <Card.Title>{i.title}</Card.Title>
                        <Card.Text>
                            <div onChange={(i) => console.log(i.target.value)} key={`inline-radio`} className="mb-3">

                                {i.type == 'mcq' ?

                                    i.choices.map((q) =>
                                        <Form.Check
                                            inline
                                            label={q}
                                            value={q}
                                            name={`group${index}`}
                                            type={'radio'}

                                        />)


                                    :
                                    <span>
                                        <Form.Check
                                            inline
                                            label="True"
                                            value="111"
                                            name={`group${index}`}
                                            type={'radio'}

                                        />
                                        <Form.Check
                                            inline
                                            label="False"
                                            name={`group${index}`}
                                            type={'radio'}

                                        />
                                    </span>


                                }

                            </div>
                        </Card.Text>

                    </Card.Body></li>)}

                        </ol>
                   
                   
                   
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="d-flex justify-content-between">
                            <Button size="sm" variant="primary">check</Button>
                            <Button size="sm" variant="primary">Next</Button>
                        </ListGroupItem>

                    </ListGroup>
                </Card>
            </div>
        )
    }
}

export default QuizPage;