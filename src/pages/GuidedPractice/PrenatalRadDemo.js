import React, { Component } from 'react';
import NormalMale from '../../assets/normalMale.JPG';
import ReactImageMagnify from 'react-image-magnify';
import { Accordion, Card, Row, Container } from 'react-bootstrap';
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
                <Card className="col-8">
                    <Card.Body>
                        <TransformWrapper initialScale={0.4} minScale={0.4} maxScale={2} centerOnInit={true}>
                            <TransformComponent wrapperStyle={{width:"100%",height:500}}>
                                <img src={NormalMale} alt="Normal Male" />
                            </TransformComponent>
                        </TransformWrapper>
                    </Card.Body>
                </Card>
                <Card  className="col-4">
                    <Card.Body>
                        <Accordion>
                            <Card>
                                DXS6803

                            </Card>
                        </Accordion>
                    </Card.Body>

                </Card>
</Row>
            </Container>
        )
    }
}

export default PrenatalRadDemo;