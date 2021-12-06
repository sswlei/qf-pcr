import React, { Component } from 'react';
import NormalMale from '../../assets/normalMale.JPG';
import ReactImageMagnify from 'react-image-magnify';
import { SplitButton, Dropdown, Button, ButtonGroup, Card, Row, Container } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

class PrenatalRadDemo extends Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (
            <Container>
                {/* <ReactImageMagnify
                    className="col-8"
                    smallImage={{
                        alt: 'Normal Male',
                        src: NormalMale,
                        isFluidWidth: true,
                    }}
                    largeImage={{
                        src:  NormalMale,
                        width: 2000,
                        height: 800,
                    }}
                    enlargedImagePosition="over"

                    
                /> */}
                <Row>
                <Card className="col-9">
                    <Card.Body>
                        <TransformWrapper initialScale={0.4} minScale={0.4} maxScale={2} centerOnInit={true}>
                            <TransformComponent wrapperStyle={{width:"100%",height:500}}>
                                <img src={NormalMale} alt="Normal Male" />
                            </TransformComponent>
                        </TransformWrapper>
                    </Card.Body>
                </Card>
                <Card  className="col-3">
                    <Card.Body>
                    <SplitButton menuAlign="start" bsStyle="info" bsSize="large" title="Main List">
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
</SplitButton>
                        <Dropdown as={ButtonGroup}>
                            <Button variant="secondary">DXS6803</Button>
                            <label className="px-3">Selected</label>
                            <Dropdown.Toggle id="" />
                            <Dropdown.Menu align="start">
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                    Active Item
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>

                </Card>
</Row>
            </Container>
        )
    }
}

export default PrenatalRadDemo;