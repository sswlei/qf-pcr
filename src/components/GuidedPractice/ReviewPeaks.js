import React, {Component} from "react";
import { Container, Row, Image, Card } from "react-bootstrap";
import CriteriaImg from "../../assets/peakReview.png";
class GuidedPractice extends Component{
    render(){
        return (
                <Row>
                <Card>
                        <h1>Review peaks for quality</h1>
                        <p>
                            When conducting Prenatal Rapid Aneuploidy Detection, the first step is to review the peaks of the data for quality. All of the following criteria must be answered with "Yes" before you can proceed with your analysis, otherwise you will need to repeat the PCR.
                        </p>
                        <Image src={CriteriaImg}></Image>
                        <p>
                            You will also need to run positive (i.e. aneuploidy present) and negative controls in each QF-PCR reaction: if results fail, cannot proceed with analysis
                        </p>
                </Card>
                </Row>
           
        )
    }
}
export default GuidedPractice;