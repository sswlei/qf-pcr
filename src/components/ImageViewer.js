import React, { Component } from 'react';
import { Button, Carousel, Container, Row, Col, Spinner, Toast } from 'react-bootstrap';
import Viewer from 'react-viewer';

class ImageViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,

        }


    }

    componentDidMount() {

    }



    render() {

        return (

            <Viewer
                visible={this.state.visible}
                onClose={() => { this.setState({ visible: !this.state.visible }) }}
                images={[{ src: '', alt: '' }]}
                activeIndex={0}
                zoomSpeed={0.15}
                defaultScale={1.5}
                className='col-12 h-100'
            />
            //  <Viewer
            //                 visible={this.state.visible}
            //                 onClose={() => { this.setState({ visible: !this.state.visible }) }}
            //                 // images={this.state.imageData}
            //                 activeIndex={0}
            //                 zoomSpeed={0.15}
            //                 defaultScale={1.5}
            //                 className='col-12 h-100'
            //             /> 

        );
    }
}

export default ImageViewer;