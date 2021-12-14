import React, {Component} from "react";
import { Tabs, Tab, Container, Button } from 'react-bootstrap';
import ReviewPeaks from '../../components/GuidedPractice/ReviewPeaks';
import PrenatalRadDemo from "../../components/GuidedPractice/PrenatalRadDemo";
class GuidedPractice extends Component{
    constructor(){
        super();
        this.state = {completedSteps:0};
    }
    render(){
        return (
            <Container>
                <Tabs defaultActiveKey="part1" className="mb-3">
                    <Tab eventKey="part1" title="1. Review quality of peaks">
                        <ReviewPeaks></ReviewPeaks>
                        <Button>Next</Button>
                    </Tab>
                    <Tab eventKey="part2" title="2. Inspect peaks: Identify Markers">
                        <PrenatalRadDemo></PrenatalRadDemo>
                    </Tab>
                    <Tab eventKey="part3" title="3. Inspect peaks: Special Loci">
                    </Tab>
                    <Tab eventKey="part4" title="4. Genotype Table">
                    </Tab>
                    <Tab eventKey="part5" title="5. Final Conclusion">
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}
export default GuidedPractice;