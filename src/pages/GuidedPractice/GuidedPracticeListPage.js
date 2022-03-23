import React, { Component } from 'react';
import { Button, Row, Card } from 'react-bootstrap';
import ModuleCard from '../../components/General/ModuleCard';


class GuidedPractice extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            modules:[{
                title:"Prenatal Rapid Aneuploidy Detection",
                description:"A guided example on Prenatal Rapid Aneuploidy Detection",
                route:"prenatalrad"
            }]
        }
    }

    onClick(route){
        this.props.history.push(`/guidedpractice/${route}`);
    }

    render() {
        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="col-12 d-flex border-2 flex-column justify-content-start mt-5 align-items-start col-12 h-100 text-dark">

                <h4 className="text-info" style={{ letterSpacing: 1, width:"100%",textAlign:"center" }}>Guided Demos</h4>
                <Row style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex col-12 mx-auto flex-row justify-content-around align-items-center bg-white p-3 ">
                    {this.state.modules.map((module)=>{
                        return <ModuleCard title={module.title} description={module.description} onClick={()=>this.onClick(module.route)}></ModuleCard>
                    })}
                </Row>
            </div>
        )
    }
}

export default GuidedPractice;