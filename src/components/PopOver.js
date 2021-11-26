import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class PopOver extends Component {

    constructor(props) {
        super(props);

        this.state = {
            defination_list: [
            {title: 'polymerase', define: 'an enzyme that creates polymers of nucleotides by nucleotide addition to a growing chain'},
            { title: 'aneuploidy', define: 'Aneuploidy refers to chromosomal abnormalities where there is a loss or gain of chromosomes not equal to a complete set' },
            { title: 'chromosomes', define: 'structure that contains DNA and scaffold proteins required to compact the DNA so it will fit into the cell nucleus. Chromosomes from cells in metaphase (when chromosomes are at their most compact) can be identified under the microscope using relative size, centromere location and special banding' },
            { title: 'diploid', define: 'while haploid (n) = one complete set of chromosomes of a species. Diploid (2n) = 2 complete sets, which is 46 in the case of humans' },
            { title: 'nondisjunction', define: 'nondisjunction is the incorrect separation of chromosomes during anaphase, resulting in one daughter cell having an extra chromosome, and one cell missing a chromosome' },
            { title: 'monosomy', define: 'Monosomy: one copy of a chromosome. Not tolerated for autosomes' },
            { title: 'trisomy', define: 'Trisomy: 3 copies of a chromosome. Most autosomal trisomies are not compatible with life' },
            { title: 'mosaics', define: '2 or more genetically distinct populations arising from 1 zygote' },
            { title:"screens", define: "identifies possible future problem i.e. identifies individuals at risk for future issues"}
            ]
        }
    }

    render() {
       
        return (

            <OverlayTrigger
                key={0}
                placement={'top'}
                overlay={
                    <Tooltip>
                        {this.state.defination_list.find((i) => i.title === this.props.text).define}
                    </Tooltip>
                }
            >
                <span className="text-primary">{this.props.text}</span>
            </OverlayTrigger>

        )
    }
}

export default PopOver;