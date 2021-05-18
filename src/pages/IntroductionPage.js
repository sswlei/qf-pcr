import React, { Component } from 'react';
import { Button, Row, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";


class IntroductionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="col-12 d-flex flex-column justify-content-start mt-4 align-items-start col-12 h-100 text-dark">
                
                    <h3 className="text-info text-monospace" style={{ letterSpacing: 1 }}>Introduction:</h3>
                    <div style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex flex-column align-items-start bg-white col-12  m-0 ">
                        <p className="mt-2">This self-paced module contains an introduction to this laboratory technique, as well as the opportunity to practice data analysis. This technique is important in laboratory diagnostics as a method for rapid aneuploidy detection (RAD), which is a molecular-based technique for quickly identifying liveborn autosomal trisomies and sex aneuploidy in prenatal cases, and for checking for the six most common numerical chromosomal abnormalities in cases of pregnancy loss.  </p>
                    </div>
               
            </div>
        )
    }
}

export default IntroductionPage;