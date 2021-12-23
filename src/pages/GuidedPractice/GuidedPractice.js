import React, {Component} from "react";
import { Row, Card, Tabs, Tab, Container, Button } from 'react-bootstrap';
import ReviewPeaks from '../../components/GuidedPractice/ReviewPeaks';
import PrenatalRadDemo from "../../components/GuidedPractice/PrenatalRadDemo";
import GenotypeTable from "../../components/GuidedPractice/GenotypeTable";
import FinalConclusion from "../../components/GuidedPractice/FinalConclusion";
import '../../components/css/StepBar.css';

class GuidedPractice extends Component{
    constructor(){
        super();
        this.state = {completedSteps:0, currentTab:0};
        this.handleSelect = this.handleSelect.bind(this);
        this.onClickNext = this.onClickNext.bind(this);

    }
    handleSelect(tab) {
        this.setState({currentTab:tab});
    }
    onClickNext(){
        var nextTab = Number.parseInt(this.state.currentTab)+1;

        if (nextTab <= 3){
            this.setState({currentTab:nextTab});
        }
    }
    render(){
        return (
            <Container className="mt-4">
                <div className="step-arrows"></div>
                <Tabs onSelect={this.handleSelect} activeKey={this.state.currentTab} className="mb-3">
                    <Tab eventKey={0} title="1. Review quality of peaks">
                        <Row>
                            <Card className="px-5 py-5 mb-5">
                                <ReviewPeaks onClickNext={this.onClickNext}></ReviewPeaks>
                                <Button onClick={this.onClickNext} style={{width: 100,marginLeft:"auto"}}>Next</Button>
                            </Card>
                        </Row>
                    </Tab>
                    <Tab eventKey={1} title="2. Inspect peaks: Identify Markers">
                        <Row>
                            <Card className="px-5 py-5 mb-5">
                                <PrenatalRadDemo></PrenatalRadDemo>
                                <Button className={"mt-3"} onClick={this.onClickNext} style={{width: 100,marginLeft:"auto"}}>Next</Button>
                            </Card>
                        </Row>
                    </Tab>
                    <Tab eventKey={2} title="3. Genotype Table">
                        <Row>
                            <Card className="px-5 py-5 mb-5">
                                <GenotypeTable></GenotypeTable>
                                <Button onClick={this.onClickNext} style={{width: 100,marginLeft:"auto"}}>Next</Button>
                            </Card>
                        </Row>
                    </Tab>
                    <Tab eventKey={3} title="4. Final Conclusion">
                        <Row>
                            <Card className="px-5 py-5 mb-5">
                                <FinalConclusion></FinalConclusion>
                            </Card>
                        </Row>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}
export default GuidedPractice;