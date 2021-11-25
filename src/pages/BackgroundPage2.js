import React, { Component } from 'react';
import { Button, Row, Tab, Col, Nav, Image, Accordion, Card, ListGroup } from 'react-bootstrap';
import PopOver from '../components/PopOver';
import PCRPhoto from '../assets/pcr_photo.png';
class BackgroundPage extends Component {

    constructor() {
        super();
        this.background_data = [
            {
                id:"what-is-pcr",
                title:"What is QF-PCR?",
                content:<div>Quantitative fluorescence PCR (QF-PCR) is a screening tool that can be used to rapidly identify chromosome numerical abnormalities. It is used in clinical diagnostics to check for aneuploidy involving chromosomes 21, 18, 13 or the sex chromosomes following abnormal prenatal blood tests, fetal ultrasound or other risk factors such as advanced maternal age or family history. This is called prenatal RAD. QF-PCR can also be used to assess for specific chromosomal trisomies (chromosomes 21, 18, 13, 15, 16, 22 or the sex chromosomes) as a possible cause of spontaneous fetal loss.
                <br></br>                                                
                <br></br>
                The basis of this technique for rapidly identify aneuploidy (abnormal numbers of chromosomes) is the molecular lab technique known as the polymerase chain reaction (PCR), a method for selective amplification (copying) of a portion of the genome. The exponential phase of PCR is key to the success of QF-PCR as a method for RAD. During the exponential stage of PCR, the number of copies of a target are equal to 2n, where n is the number of PCR cycles. QF-PCR allows for the amount of fluorescent signal produced in PCR to be proportional to the amount of starting material by performing polymerase chain reaction (PCR) with limited cycle numbers and fluorescent label on PCR primers
                <br></br>                                                
                <br></br>
                Commercial kits are available for QF-PCR that contain all the components needed for PCR amplification of DNA from patient specimens.</div>
            },
            {
                id:"pcr-overview",
                title:"PCR overview",content:<div>In 1983 Dr. Kary Mullis was inspired {<PopOver text={'polymerase'}/>} to develop a method for in vitro (“in glass” i.e. outside of the living cell) DNA amplification, when he realized that short oligonucleotide “primers” could be designed to target specific sequences. PCR is an amplification method where the amount of target DNA is doubled at each step during the early, exponential phase of the reaction (replication slows during later stages as reagents run out and become rate-limiting). Two years later the first paper describing the practical application of PCR, as a method to amplify the gene for betaglobin as a diagnosis method for sickle cell anemia, was published. Mullis called this technique a polymerase-catalyzed chain reaction because the key enzyme is DNA polymerase and the copies of the template that are created act as more targets for the polymerase, causing exponential amplification.
                <br></br>                                                
                <br></br>
                This technique uses the same components and enzyme from DNA replication within cells, but it has been adapted for lab use. Over the years the original PCR protocol has been optimized by utilizing a temperature-resistant polymerase (so the polymerase does not need to be replaced each cycle) and fluorescent labels (allowing for automated product detection). In summary, PCR is a method to target a specific portion of the genome in order to increase its abundance. Key components in the PCR reaction include (in addition to the previously mentioned polymerase), 2 short oligonucleotide “primers” to initiate the amplification at a specific location and all four nucleotide building blocks for DNA. The PCR reaction occurs in a device called a thermocycler, which allows for precise temperature and reaction length control. Each PCR cycle consists of 3 reactions, illustrated below:
                ${<Image src={PCRPhoto} fluid></Image>}
                <br></br>
                <br></br>
                Annealing (50-70C: a critical step for reaction specificity, dependent on the GC content of the primers), to allow the primers to find the complementary sequence in the genome and hybridize to form a double stranded region. The primer sequences need to be carefully designed to only match the region surrounding the area of interest (one primer on each side) in the genome to ensure that only the ROI is amplified. The annealing temperature setting on the thermocycler is based on the melting temperature (the temperature at which 1/2 of the primers have dissociated from the template) of the primers.
                <br></br>
                <br></br>
                Extension (68-75C: dependent on the polymerase): DNA synthesis, where new nucleotides are added to the 3’ end of the primers via hydrogen bonding, creating a new DNA strand complementary to one of the template strands.
                <br></br>
                <br></br>
                This method allows lab workers to generate millions of copies of a relevant region of the genome to be used for analyses.
                <br></br>
                <br></br>
                The early cycles feature exponential amplification: every cycle doubles the amount of DNA, with the rate of amplification eventually decreasing in later stages as reagent are exhausted.</div>
            }
        ];

    }

    componentDidMount() {
    }

    render() {
        console.log(this.background_data);
        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="col-12 bg-secondary mx-auto d-flex text-dark">
               <Tab.Container id="background-tabs" defaultActiveKey="what-is-pcr">
                    <Row>
                        <Col sm={3}>
                            <Card>
                                {/* <Nav className="flex-column">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">What is PCR?</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                </Nav> */}
                                <ListGroup variant="flush">
                                    <ListGroup.Item> 
                                        <Nav.Link eventKey="what-is-pcr">What is QF-PCR?</Nav.Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item> 
                                        <Nav.Link eventKey="pcr-overview">PCR overview</Nav.Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item> 
                                        <Nav.Link eventKey="what-is-aneuploidy">What is aneuploidy?</Nav.Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item> 
                                        <Nav.Link eventKey="why-test-aneuploidy">Why test for aneuploidy?</Nav.Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item> 
                                        <Nav.Link eventKey="prenatal-pcr">Prenatal QF-PCR</Nav.Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item> 
                                        <Nav.Link eventKey="pcr-pregnancy-loss">QF-PCR for Pregnancy Loss</Nav.Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                {
                                     this.background_data.map(function(x) {
                                        return (
                                            <Tab.Pane eventKey={x.id}>
                                                <Card>
                                                    <Card.Header>{x.title}</Card.Header>
                                                    <Card.Body>                                        
                                                        <Card.Text>
                                                            {x.content}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Tab.Pane>
                                        );
                                    })
                                }
                               
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
               
            </div>
        )
    }
}

export default BackgroundPage;