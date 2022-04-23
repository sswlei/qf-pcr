import { Component } from "react";
import { Image, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import trophy from "../../assets/winner.png";

class CompletedFinalAssessmentPage extends Component{
    constructor(props) {
        super(props);
    }

    render(){ 
        return <Container className="mt-4">
            <Card className="px-5 py-5 mb-5" style={{textAlign:"center"}}>
                <Card.Title>
                    <h2>Congratulations for completing this online QF-PCR practice on {(new Date()).toLocaleDateString("en-US")}</h2>
                </Card.Title>
                <Card.Body>
                    <Image height={200} src={trophy}></Image>
                    <p className="mt-3">If you wish, you can <Link to="/">return to the beginning</Link> for more practice</p>
                </Card.Body>
            </Card>
        </Container>
    }
}
export default CompletedFinalAssessmentPage;