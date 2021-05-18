import React, { Component } from 'react';
import { Button, Row, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";


class BackgroundPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="col-12 d-flex flex-column justify-content-start mt-4 align-items-start col-12 h-100 text-dark">

                <h3 className="text-info text-monospace" style={{ letterSpacing: 1 }}>What is PCR ?</h3>
                <div style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex flex-column align-items-start bg-white col-12 m-0 ">
                    <p className="mt-2">
                        In 1983 Dr. Kary Mullis was inspired to develop a method for in vitro (“in glass” i.e. outside of the living cell) DNA amplification, when he realized that short oligonucleotide “primers” could be designed to target specific sequences. PCR is an amplification method where the amount of target DNA is doubled at each step during the early, exponential phase of the reaction (replication slows during later stages as reagents run out and become rate-limiting). Two years later the first paper describing the practical application of PCR, as a method to amplify the gene for betaglobin as a diagnosis method for sickle cell anemia, was published. Mullis called this technique a polymerase-catalyzed chain reaction because the key enzyme is DNA polymerase and the copies of the template that are created act as more targets for the polymerase, causing exponential amplification. </p>
                    <p className="mt-2">
                        *an enzyme that creates polymers of nucleotides by nucleotide addition to a growing chain* </p>
                    <p className="mt-2">
                        This technique uses the same components and enzyme from DNA replication within cells, but it has been adapted for lab use. Over the years the original PCR protocol has been optimized by utilizing a temperature-resistant polymerase (so the polymerase does not need to be replaced each cycle) and fluorescent labels (allowing for automated product detection). In summary, PCR is a method to target a specific portion of the genome in order to increase its abundance. Key components in the PCR reaction include (in addition to the previously mentioned polymerase), 2 short oligonucleotide “primers” to initiate the amplification at a specific location and all four nucleotide building blocks for DNA. The PCR reaction occurs in a device called a thermocycler, which allows for precise temperature and reaction length control. Each PCR cycle consists of 3 reactions, illustrated below:
                        </p>
                    <p className="mt-2">
                        Annealing (50-70C: a critical step for reaction specificity, dependent on the GC content of the primers), to allow the primers to find the complementary sequence in the genome and hybridize to form a double stranded region. The primer sequences need to be carefully designed to only match the region surrounding the area of interest (one primer on each side) in the genome to ensure that only the ROI is amplified. The annealing temperature setting on the thermocycler is based on the melting temperature (the temperature at which 1/2 of the primers have dissociated from the template) of the primers.
                        </p>
                    <p className="mt-2">
                        Extension (68-75C: dependent on the polymerase): DNA synthesis, where new nucleotides are added to the 3’ end of the primers via hydrogen bonding, creating a new DNA strand complementary to one of the template strands.
                        </p>
                    <p className="mt-2">
                        This method allows lab workers to generate millions of copies of a relevant region of the genome to be used for analyses.
                        </p>
                    <p className="mt-2">
                        The early cycles feature exponential amplification: every cycle doubles the amount of DNA, with the rate of amplification eventually decreasing in later stages as reagent are exhausted.
                        </p>
                </div>

            </div>
        )
    }
}

export default BackgroundPage;