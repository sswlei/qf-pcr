import React, {Component} from "react";
import { Col, Nav, Row, Card, Tabs, Tab, Container, Button } from 'react-bootstrap';
import IdentifyMarkers from "../../components/GuidedPractice/Base/IdentifyMarkers";
import GenotypeTable from "../../components/GuidedPractice/Base/GenotypeTable";
import FinalConclusion from "../../components/GuidedPractice/Base/FinalConclusion";
import '../../components/GuidedPractice/css/StepBar.css';
import final_data from '../../data/FinalAssessment/finalAssessment.json';
import FinalIntro from "../../components/FinalAssessment/FinalIntro";

class FinalAssessmentPage extends Component{
    constructor(props){
        super(props);
        this.state = {completedSteps:0, currentTab:0, caseId:this.props.match.params.caseId, caseType:this.props.match.params.caseType, reachedMaxAttempts: false};
        this.handleSelect = this.handleSelect.bind(this);
        this.onClickNext = this.onClickNext.bind(this);
        this.getStepColor = this.getStepColor.bind(this);
        this.isStepCompleted = this.isStepCompleted.bind(this);
        this.checkAttempts = this.checkAttempts.bind(this);

        this.checkAttempts();

        this.data = final_data[0]; //default set to 0
        let currentCase = localStorage.getItem(`${this.props.match.params.caseType}${this.props.match.params.caseId}_case`);

        if (currentCase == null){
            let randomCase = Math.round(Math.random());
            this.data = final_data[randomCase];
            localStorage.setItem(`${this.props.match.params.caseType}${this.props.match.params.caseId}_case`, randomCase);

        }else{
            this.data = final_data[currentCase];
        }
    }
    checkAttempts(){
        let currentAttempts = localStorage.getItem(`${this.props.match.params.caseType}${this.props.match.params.caseId}_attempts`);
        if (currentAttempts == null){
            localStorage.setItem(`${this.props.match.params.caseType}${this.props.match.params.caseId}_attempts`, 0);
        }
        else if (currentAttempts >= 3){
            this.setState({reachedMaxAttempts:true});
            this.props.history.push(`/final_assessment/${this.props.match.params.caseType}/${this.props.match.params.caseId}/max_attempts`);
        }
    }
    handleSelect(tab) {
        this.setState({currentTab:parseInt(tab)});
    }
    onClickNext(){
        var nextTab = Number.parseInt(this.state.currentTab)+1;
        var stepsCompleted = Number.parseInt(this.state.completedSteps);
        if ( stepsCompleted < 3 ){
            stepsCompleted++;
        }
        if ( nextTab <= 3 ){
            window.scrollTo(0, 0);
            this.setState({ currentTab:nextTab, completedSteps:stepsCompleted });
        }
    }
    getStepColor(tab){
        if ( tab===this.state.currentTab ){
            return "current-step";
        }
        else if (tab<this.state.currentTab){
            return "completed-step"
        }
        return "";
    }

    isStepCompleted(step){
        if ( step <= this.state.completedSteps ){
            return true;
        }
        return false;
    }

    render(){
        return (       
            <Container className="mt-4">
                <h2 className="mb-3 text-monospace text-info">Final Assessment</h2>
                <Tab.Container onSelect={this.handleSelect} activeKey={this.state.currentTab}>
                    <Row>
                        <Col sm={12}>
                            <Nav className="step-arrows-4">
                                <Nav.Item className={`step-arrows ${this.getStepColor(0)}`}>
                                    <Nav.Link disabled={!this.isStepCompleted(0)}  eventKey={0}><strong>Intro</strong> <br></br> Start</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={`step-arrows ${this.getStepColor(1)}`}>
                                    <Nav.Link disabled={!this.isStepCompleted(1)}  eventKey={1}><strong>Part 1</strong> <br></br> Identify Markers</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={`step-arrows ${this.getStepColor(2)}`} >
                                    <Nav.Link disabled={!this.isStepCompleted(2)} eventKey={2}><strong>Part 2</strong> <br></br> Genotype Table</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={`step-arrows ${this.getStepColor(3)}`}>
                                    <Nav.Link disabled={!this.isStepCompleted(3)}  eventKey={3}><strong>Part 3</strong> <br></br> Final Conclusion</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey={0}>
                                <Card className="px-5 py-5 mb-5">
                                    <FinalIntro onClickNext={this.onClickNext}></FinalIntro>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey={1}>
                                <Card className="px-5 py-5 mb-5">
                                    <IdentifyMarkers caseType={this.state.caseType} caseId = {this.state.caseId} canSkip={false} saveAnswers={true} showEvaluation={false} data={this.data} onClickNext={this.onClickNext}></IdentifyMarkers>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey={2}>
                                <Card className="px-5 py-5 mb-5">
                                    <GenotypeTable data={this.data} onClickNext={this.onClickNext}></GenotypeTable>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey={3}>
                                <Card className="px-5 py-5 mb-5">
                                    <FinalConclusion category="final_assessment" caseType={this.state.caseType} caseId = {this.state.caseId} data={this.data} history={this.props.history}></FinalConclusion>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>         

        )
    }
}
export default FinalAssessmentPage;