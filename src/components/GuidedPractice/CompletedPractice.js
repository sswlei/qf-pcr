import { Component } from "react";
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CompletedPractice extends Component{
    constructor(props) {
        super(props);
    }
    render(){ 
        return <Container className="mt-4">
            <Card>
                <Card.Title>
                    You have successfully completed the Guided Practice for Prenatal Rapid Aneuploidy Detection!
                </Card.Title>
                <Card.Body>
                    Next, complete the <Link to="/quiz">quiz</Link> for this online learning module to earn your completion certificate!
                </Card.Body>
            </Card>
        </Container>
    }
}
export default CompletedPractice;