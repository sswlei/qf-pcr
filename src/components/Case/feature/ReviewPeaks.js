import React from "react";
import {Image, Button } from "react-bootstrap";
import CriteriaImg from "../../../assets/peakReview.png";

const ReviewPeaks = () => {
    return (
        <>

            <h2>Review peaks for quality</h2>
            <p>
                When conducting Prenatal Rapid Aneuploidy Detection, the first step is to review the peaks of the data for quality. All of the following criteria must be answered with "Yes" before you can proceed with your analysis, otherwise you will need to repeat the PCR.
            </p>
            <Image className="mb-3" style={{marginLeft:"auto",marginRight:"auto"}} width={700} src={CriteriaImg}></Image>
            <p>
                You will also need to run positive (i.e. aneuploidy present) and negative controls in each QF-PCR reaction: if results fail, cannot proceed with analysis
            </p>
            <Button href="identify-markers" style={{width: 100,marginLeft:"auto"}}>Next</Button>
        </>
    )
}
export default ReviewPeaks;