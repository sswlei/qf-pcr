import React, { Component } from "react";
import { Container } from 'react-bootstrap';

class GuidedPracticePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Container className="mt-4">
                <h2 className="mb-3 text-monospace text-info">Guided Practice</h2>
                {this.props.children}
            </Container>
        )
    }
}
export default GuidedPracticePage;