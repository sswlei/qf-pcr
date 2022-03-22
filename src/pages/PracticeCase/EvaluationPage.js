import React, {Component} from "react";
import { ListGroup, Container, Button, Table } from 'react-bootstrap';

class EvaluationPage extends Component{
    constructor(props){
        super(props);

    }
    calculateMarkersScore(){
        var correctMarkers = 0;
        var totalQuestions = 0;
        var markers = JSON.parse(localStorage.getItem(this.props.match.params.caseType+this.props.match.params.caseId+"_markers"));
        for (let question of Object.keys(markers)){
            for (const [key, value] of Object.entries(markers[question])){
                totalQuestions++;
                if (value.correct){
                    correctMarkers++;
                }
            }
        }
        return  <td className={correctMarkers/totalQuestions===1?"text-success":"text-danger"} style={{textAlign:"right"}}>{`${correctMarkers}/${totalQuestions}`}</td>;
    }
    getFinalConclusion(){
        var answer = JSON.parse(localStorage.getItem(this.props.match.params.caseType+this.props.match.params.caseId+"_conclusion"));
        return  <td className={answer.correct?"text-success":"text-danger"} style={{textAlign:"right"}}>{`${answer.correct?"Correct!":"Incorrect."} (Answered: ${answer.answer})`}</td> ;
    }

    render(){
        return (       
            
            <Container className="mt-4">
                <h2 className="text-info">Evaluation</h2>
                {/* <ListGroup className="mb-3">
                    <ListGroup.Item>{this.calculateMarkersScore()}</ListGroup.Item>
                    <ListGroup.Item>{this.checkFinalConclusion()}</ListGroup.Item>
                </ListGroup> */}
                <Table borderd striped>
                    <tbody>
                        <tr>
                            <td>Correctly identified markers</td>
                            {this.calculateMarkersScore()}
                        </tr>
                        <tr>
                            <td>Final conclusion</td>
                            {this.getFinalConclusion()}
                        </tr>
                        <tr><td></td><td></td></tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}
export default EvaluationPage;