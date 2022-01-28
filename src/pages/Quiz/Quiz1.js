import React, { Component } from 'react';
import { Button, Alert, Form, ListGroupItem, Card, ListGroup } from 'react-bootstrap';
import QuestionList from '../../assets/questions.json';

class Quiz1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            user_input: false,
            showFeedback: false
        }
    }

    componentDidMount() {
        this.getRandomQuestions();
    }

    getRandomQuestions() {
        let list = [];
        let mcq_s = QuestionList.mcq_questions;
        let tf_s = QuestionList.tf_questions;


        while (list.length<6) {
            const random = Math.floor(Math.random() * mcq_s.length);
            if (list.indexOf(mcq_s[random]) !== -1) {
                continue;
            };
            list.push(mcq_s[random]);

        }
    
        while (list.length<10) {
            const random = Math.floor(Math.random() * tf_s.length);
            if (list.indexOf(tf_s[random]) !== -1) {
                continue;
            };
            list.push(tf_s[random]);

        }
        
        this.setState({ data: list, user_input: false, showFeedback: false });
    }

    answerQuestions(index, input) {
        this.setState({ ...this.state.data, })

        let questions = [...this.state.data];
        console.log(questions);
        questions[index] = { ...questions[index], user_input: input, 
            
            
            correct: questions[index].type == "mcq" ? input == questions[index].choices[questions[index].answer] :
        
            input == questions[index].answer
        };

        let userInputRec = questions.filter((i) => i.user_input);

        this.setState({ data: questions, user_input: userInputRec.length === questions.length });
    }

    render() {


        return (
            <div style={{ height: '100%' }} className=" mx-auto d-flex flex-column align-items-center mt-5 col-12">

                <Card className="col-sm-11 col-md-9" >
                    <Card.Header className="m-3" as="h5">Quiz #1</Card.Header>

                    <ol>
                        {this.state.data.map((i, index) => <li> <Card.Body>
                            <Card.Title>{i.title}</Card.Title>
                            <Card.Text>
                                <div onChange={(i) => this.answerQuestions(index, i.target.value)} key={`inline-radio`} className="mb-3">

                                    {i.type == 'mcq' ?
                                        <ol type="a">
                                            {i.choices.map((q) =>
                                                <li><Form.Check
                                                    key={q}
                                                    inline
                                                    label={q}
                                                    value={q}
                                                    name={`group${index}`}
                                                    type={'radio'}

                                                /></li>)}

                                        </ol>
                                        :
                                        <span>
                                            <Form.Check
                                                inline
                                                label="True"
                                                value={true}
                                                name={`group${index}`}
                                                type={'radio'}

                                            />
                                            <Form.Check
                                                inline
                                                label="False"
                                                value={false}
                                                name={`group${index}`}
                                                type={'radio'}

                                            />
                                        </span>


                                    }
                                    {this.state.showFeedback ? 
                                    <Alert className="m-1" variant={i.correct ? "success" : "danger"} >
                                    <Alert.Heading>{i.correct ? 'Correct' : 'Incorrect' }</Alert.Heading>
                                    {i.correct ?    
                                    <p>
                                        {i.feedback}
                                    </p>             :
                                    <p>
                                        Correct Answer: {i.type === 'tf' ? i.answer : i.choices[i.answer]}
                                    </p>}
                                </Alert> : null}
                                    
                                </div>
                            </Card.Text>

                        </Card.Body></li>)}

                    </ol>


                    { this.state.showFeedback ? <Card.Footer className=""> Score: { this.state.data.filter((i) => i.correct).length + ' / ' + this.state.data.length }</Card.Footer> : null}
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="d-flex justify-content-end">
                            <Button 
                            onClick={() => !this.state.showFeedback ? this.setState({showFeedback: true}) : window.location.reload()} 
                            disabled={!this.state.user_input} 
                            size="sm" 
                            variant="primary">{!this.state.showFeedback ? 'Check' : 'Reset'}
                            </Button>

                        </ListGroupItem>

                    </ListGroup>

                </Card>
            </div>
        )
    }
}

export default Quiz1;