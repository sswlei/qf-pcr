import React, { Component } from 'react';
import { Figure, Button, Row, Tab, Col, Nav, Image, Container, Card, ListGroup, Table } from 'react-bootstrap';
import PopOver from '../components/PopOver';
import PCRPhoto from '../assets/pcr_photo.png';

import trisomy13 from '../assets/trisomy_13.png';
import trisomy18 from '../assets/trisomy_18.png';
import trisomy21 from '../assets/trisomy_21.png';
import klinefelter_47XXY from '../assets/klinefelter_47-XXY.png';
import turner from '../assets/turner.png';
class BackgroundPage extends Component {

    constructor() {
        super();
        this.state = {
            currentTab:0
        }
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
                {<Image src={PCRPhoto} fluid></Image>}
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
            },
            {
                id:"what-is-aneuploidy",
                title:"What is aneuploidy?",content: <div>What is {<PopOver text={'aneuploidy'}/>}, and why is it important in laboratory diagnosis of genetic disorders? 
                <br></br>                                                
                <br></br>
                The normal number of {<PopOver text={'chromosomes'}/>} in human cells is 46, grouped as 23 pairs. Since these chromosomes are paired, this means that the number of chromosomes in one complete set is 23, and human cells are {<PopOver text={'diploid'}/>}
                <br></br>                                                
                <br></br>
                In practical terms, this usually means a gain or loss of one chromosome. Most aneuploids are not compatible with life, as the extra genomic material creates an imbalance in the genetic material. Aneuploidy is typically due to chromosome {<PopOver text={'nondisjunction'}/>} during gamete formation.
                <br></br>                                                
                <br></br>
                In the diagnostic laboratory, aneuploidy occurs with 0.5% frequency in pregnancies carried to term, and 50% in spontaneous fetal loss. The most common types of aneuploidy are {<PopOver text={'monosomy'}/>} and {<PopOver text={'trisomy'}/>}.
                </div>
            },
            {
                id:"why-test-aneuploidy",
                title:"Why test for aneuploidy?",content: <div>Two main reasons for aneuploidy detection in clinical lab:
                    <br></br>
                    <br></br>
                    <ul>
                        <li>
                            Follow up to prenatal blood or ultrasound screening test, or other risk factors
                            <ul>
                                <li>Test needs to be rapid so results can be used for pregnancy management, in consultation with genetic counsellor</li>

                            </ul>
                        </li>
                        <li>
                            Assessment of fetal loss
                            <ul>
                                <li>10-15% clinically recognized pregnancy end in spontaneous miscarriage (PL)</li>
                                <li>86% of first trimester spontaneous miscarriage with genetic cause are due to chromosome numerical abnormality, such as aneuploidy or polyploidy</li>
                                <li>Test can provide information about recurrence risk in future pregnancies </li>
                                <li>Alternative to conventional cytogenetic testing
                                    <ul>
                                        <li>Tissue culture for karyotyping of PL samples has high failure rate</li>
                                    </ul>
                                </li>

                            </ul>
                        </li>
                    </ul>
                    
                    This online module will provide practice for both of these types of cases.

                </div>
            },
            {
                id:"prenatal-pcr",
                title:"Prenatal QF-PCR",content: <div>
                   These are the conditions that are assessed when performing prenatal QF-PCR:
                   <Table striped bordered className={"mt-3"}>
                        <thead>
                            <tr>
                                <th>Condition</th><th>Frequency</th><th>Characteristics</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Down syndrome: extra Chr 21</th><td>1/700 live births</td><td>flat facial profile, mental retardation, cardiac issues, abnormal immune system, eventual neuropathological disorder; increased risk of acute leukemia</td>
                            </tr>
                            <tr>
                                <th>Edwards syndrome: extra Chr 18</th><td>1/3000 live births</td><td>clenched fist, survival &lt;1 yr</td>
                            </tr>
                            <tr>
                                <th>Patau syndrome: extra chr 13</th><td>1/21700 live births</td><td>cleft palate, heart damage, mental retardation, survival &lt;6 mon</td>
                            </tr>
                            <tr>
                                <th>Klinefelter syndrome: varies, but most often 47,XXY</th><td>1/500-650 live births</td><td>male hypogonadism, long legs, gynecomastia, low testosterone</td>
                            </tr>
                            <tr>
                                <th>XYY syndrome: 47,XYY </th><td>1/1000 live births</td><td>excessive height, acne 1%-2% behavioral disorders</td>
                            </tr>
                            <tr>
                                <th>Multi X: 47,XXX or 48,XXXX</th><td>1/1200 live births</td><td>Mental retardation increases with increasing X</td>
                            </tr>
                            <tr>
                                <th>Turner syndrome: varies but most often 45,X</th><td>1/2000 – 1/5000 live births</td><td>bilateral neck webbing, heart disease, failure to develop secondary sex characteristics hypothyroidism</td>
                            </tr>
                        </tbody>
                   </Table>
                   Some of these conditions are present as {<PopOver text={'mosaics'}/>}, which can make diagnosis more challenging as some are not detected by this diagnostic test.
                   <br></br>
                   <br></br>
                   Prenatal QF-PCR is ordered as a reflex test in response to prenatal {<PopOver text={'screens'}/>} such as the Integrated Prenatal Screen (early screen during pregnancy (10-13.5 weeks) to test for PAPP-A (pregnancy associated plasma protein-A) or beta human chorionic gonadotrophin (hCG) and can include fetal ultrasound). Advanced maternal age (&gt;40yrs at time of delivery) is another risk factor that may prompt QF-PCR to assess for trisomies.
                   <br></br>
                   <br></br>
                   Note that for followup diagnostic testing, such as QF-PCR, a positive result does not confirm that the fetus is affected, just as a negative result does not eliminate the possibility the fetus is affected. However, a negative result can exclude the tested aneuploidies as a diagnosis.
                   <br></br>
                   <br></br>
                   QF-PCR will detect whole chromosomal aneuploidy, but not balanced structural rearrangements, such as translocations or inversions. The underlying cause of the aneuploidy (i.e. nondisjunction or unbalanced structural rearrangement) is also not determined. Complications such as maternal cell contamination (MCC) and confined placental mosaicism (CPM) may result in discrepancies between QF-PCR and karyotype results.
                   <br></br>
                   <br></br>
                   Examples of karyotypes showing chromosomal aneuploidy:
                   <br></br>
                   <br></br>
                   <Figure>
                        <Figure.Caption>
                            Trisomy 21
                        </Figure.Caption>
                        <Figure.Image
                            alt="Trisomy 21"
                            src={trisomy21}
                        />
                    </Figure>
                    <Figure>
                        <Figure.Caption>
                            Trisomy 18
                        </Figure.Caption>
                        <Figure.Image
                            alt="Trisomy 18"
                            src={trisomy18}
                        />
                    </Figure>
                    <Figure>
                        <Figure.Caption>
                            Trisomy 13
                        </Figure.Caption>
                        <Figure.Image
                            alt="Trisomy 13"
                            src={trisomy13}
                        />
                    </Figure>
                    <Figure>
                        <Figure.Caption>
                        Klinefelter (47,XXY)
                        </Figure.Caption>
                        <Figure.Image
                            alt="Klinefelter (47,XXY)"
                            src={klinefelter_47XXY}
                        />
                    </Figure>
                    <Figure>
                        <Figure.Caption>
                        Turner
                        </Figure.Caption>
                        <Figure.Image
                            alt="Turner"
                            src={turner}
                        />
                    </Figure>
                </div>
            },
            {
                id:"pcr-pregnancy-loss",
                title:"QF-PCR for Pregnancy Loss",content: <div>
                    <ul>
                        <li>Spontaneous miscarriage occurs in 10-15% of all clinically recognized pregnancies </li>
                        <li>Major cause of PL are chromosomal abnormalities</li>
                        <li>Trisomies possible for all autosomal chromosomes in PL</li>
                        <li>QF-PCR for PL looks for most common chromosomal trisomies associated with early fetal loss: Chromosomes 15, 16, 21, and 22</li>
                        <li>Also checks for trisomy in same chromosomes as prenatal RAD (i.e. 13, 18: can occur in PL later in pregnancy)</li>
                        <li>Autosomal monosomies rare</li>
                        <li>Identifying cause of PL can provide information about chance PL can occur in future pregnancies</li>
                        <li>Possible reasons for performing PL QF-PCR:
                            <ul>
                                <li>Spontaneous fetal loss</li>
                                <li>Assessment after voluntary termination due to abnormal prenatal screen</li>
                                <li>Intrauterine death or stillbirth</li>
                                <li>Recurrent pregnancy loss</li>
                            </ul>
                        </li>
                        <li>QF-PCR does not require culturing of cells (10-40% of culture attempts fail): QF-PCR analyzes genomic DNA</li>
                        <li>As for prenatal RAD, only informative markers (must have at least 2 peaks) are analyzed</li>
                        <li>Normal: one peak or 2 peaks with similar peak areas</li>
                        <li>Abnormal: 2 peaks with 1:2 or 2:1 ratio, or 2 peaks (with 1:1:1) ratio</li>
                        <li>Most common cause of abnormality: chromosome non-disjunction</li>
                        <li>Maternal cell contamination or mosaicism can complicate diagnosis</li>


                    </ul>
                </div>
            }
        ];

        this.onClickNext = this.onClickNext.bind(this);
    }
    onClickNext() {
        var nextTab = this.state.currentTab+1;
        if (nextTab < this.background_data.length){
            this.setState({currentTab:nextTab});
        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="bg-secondary text-dark py-4">
                <Container>
                    <Row>
                        <Tab.Container id="background-tabs"  activeKey={this.background_data[this.state.currentTab].id}>
                            <Row>
                                <Col sm={4}>
                                    <Card className="border-0">
                                        <ListGroup variant="flush" >
                                            {this.background_data.map(function(x,index) {
                                                return (
                                                    <ListGroup.Item onClick={()=>this.setState({currentTab:index})} key={x.id} className={this.state.currentTab==index?'bg-info text-white':''} style={{cursor:"pointer"}}> 
                                                        {x.title}
                                                    </ListGroup.Item>
                                                )
                                            }, this)}
                                        </ListGroup>
                                    </Card>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content>
                                        {
                                            this.background_data.map(function(x) {
                                                return (
                                                    <Tab.Pane key={x.id} eventKey={x.id}>
                                                        <Card className="px-3 py-3">
                                                            <Card.Header className="bg-info text-white" as="h5">{x.title}</Card.Header>
                                                            <Card.Body as="div">                                        
                                                                {x.content}
                                                            </Card.Body>
                                                            <Card.Footer style={{textAlign:'right'}} className="bg-transparent border-white">
                                                                <Button size="sm" onClick={this.onClickNext} variant="primary" hidden={this.state.currentTab+1>=this.background_data.length}>NEXT</Button>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Tab.Pane>
                                                );
                                            },this)
                                        }
                                    
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Row>
                </Container>
            </div>
            
        )
    }
}

export default BackgroundPage;