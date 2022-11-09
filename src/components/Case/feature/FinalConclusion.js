import React, { useState } from "react";
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
// import { setModuleComplete } from '../../../util/utils.js';

const FinalConclusion = () => {
    const [finalAnswer,setFinalAnswer] = useState('');
    const finalOptions = [
        "Normal female",
        "Normal male",
        "Trisomy 13 male",
        "Trisomy 13 female",
        "Trisomy 16 male",
        "Trisomy 16 female",
        "Trisomy 18 male",
        "Trisomy 18 female",
        "Trisomy 21 male",
        "Trisomy 21 female",
        "Trisomy 22 male",
        "Trisomy 22 female",
        "Triploidy",
        "Klinefelter",
        "Turner",
        "Other",
        "Further testing required"
    ];
    const navigate = useNavigate();
    const {category} = useParams();
    const onFinish = () => {
        navigate(`/${category}/completed`)

    }

    return (
        <div>
            <h3>Is there enough evidence for a final conclusion?</h3>
            <p>Based on what we have observed from the previous two steps, what can we conclude about the subject?</p>
            <p><strong>Normal:</strong> must have at least 2 markers for each chromosome that have normal ratio: all others uninformative</p>
            <p>
                <strong>Trisomy:</strong>for affected chromosome: must have at least 2 markers for chromosome that have trisomy ratio, or 3 peaks: all others uninformative
                If both normal and abnormal allele patterns seen, call for further testing
            </p>
            <p>
                <strong>Triploidy (3N):</strong> suspected if all chromosomes show trisomy
            </p>
            <h5 className="pt-3 pb-2"><strong>Sex chromosome abnormalities</strong></h5>
            <p>
                <strong>Klinefelters:</strong> need AMEL XY, one peak for Ch Y loci, 2 peaks or uninformative for Ch X loci, TAF9L ratio is for 2X (i.e. Ch 3 and Ch X peaks same peak area)
            </p>
            <p>
                <strong>Turner:</strong> need AMEL XX, no ChY loci peaks, 1 peak for Ch X loci, TAF9L ratio is for 1X (i.e. Ch 3 has peak area twice Ch X peak area)
            </p>
            <p>
                Remember to also review autosomes: there can be more than only abnormality (but this is rare) 
            </p>
            <p>
                Select what we can conclude about the subject:
            </p>

            <Dropdown className="mb-3 mr-2" as={ButtonGroup}>
                <label className="mx-0 my-0 px-4 py-0 rounded-left" style={{border:"1px solid gray",lineHeight:"38px"}}>
                    {finalAnswer===""?"Select":finalAnswer}
                </label>
                <Dropdown.Toggle variant="secondary" style={{height:40}}/>
                <Dropdown.Menu alignright="true">
                    {finalOptions.map((item,index)=>{
                        return <Dropdown.Item key={index} onClick={()=>{setFinalAnswer(item)}}>{item}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown> 
                <br></br>
            <Button disabled={finalAnswer===""} onClick={onFinish} className={"mt-3"} style={{width: 100,float:"right"}}>Finish</Button>
        </div>
    )
}


export default FinalConclusion;