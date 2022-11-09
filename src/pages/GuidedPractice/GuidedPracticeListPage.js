import React, { Component, useState } from 'react';
import { Button, Row, Card } from 'react-bootstrap';
import ModuleCard from '../../components/General/ModuleCard';
import { useNavigate } from 'react-router-dom';


const GuidedPractice = () => {
    const navigate = useNavigate();
    const [modules, setModules] = useState(
        [{
            title:"Prenatal Rapid Aneuploidy Detection",
            description:"A guided example on Prenatal Rapid Aneuploidy Detection",
            route:"prenatalrad"
        }
    ]);

    return (
        <div>
            <h4 className="text-info mt-4" style={{ letterSpacing: 1, width:"100%",textAlign:"center" }}>Guided Demos</h4>
            <Row style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex col-12 mx-auto flex-row justify-content-around align-items-center bg-white p-3 ">
                {modules.map((module,index)=>{
                    return <ModuleCard key={index} title={module.title} description={module.description} onClick={()=>navigate(`prenatalRad_guided_1`)}></ModuleCard>
                })}
            </Row>
        </div>
    )
}

export default GuidedPractice;