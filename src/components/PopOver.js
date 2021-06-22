import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class PopOver extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (

            <OverlayTrigger
                key={0}
                placement={'top'}
                overlay={
                    <Tooltip>
                        an enzyme that creates polymers of nucleotides by nucleotide addition to a growing chain*
              </Tooltip>
                }
            >
                <span>text</span>
            </OverlayTrigger>

        )
    }
}

export default PopOver;