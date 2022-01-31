import React, { Component } from "react";
import { Container } from 'react-bootstrap';

class GuidedPracticePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Container className="mt-4">
                {this.props.children}
            </Container>
        )
    }
}
export default GuidedPracticePage;