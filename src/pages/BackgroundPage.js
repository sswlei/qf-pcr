import React, { Component } from 'react';
import { Button, Row, Image, Accordion, Card, ListGroup } from 'react-bootstrap';
import PopOver from '../components/PopOver';


class BackgroundPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

            data: [
                {
                    'title': "What is PCR ?", "text": [
                        `In 1983 Dr. Kary Mullis was inspired${ <PopOver/>} to develop a method for in vitro (“in glass” i.e. outside of the living cell) DNA amplification, when he realized that short oligonucleotide “primers” could be designed to target specific sequences. PCR is an amplification method where the amount of target DNA is doubled at each step during the early, exponential phase of the reaction (replication slows during later stages as reagents run out and become rate-limiting). Two years later the first paper describing the practical application of PCR, as a method to amplify the gene for betaglobin as a diagnosis method for sickle cell anemia, was published. Mullis called this technique a polymerase-catalyzed chain reaction because the key enzyme is DNA polymerase and the copies of the template that are created act as more targets for the polymerase, causing exponential amplification.`,
                        "*an enzyme that creates polymers of nucleotides by nucleotide addition to a growing chain*",
                        "This technique uses the same components and enzyme from DNA replication within cells, but it has been adapted for lab use. Over the years the original PCR protocol has been optimized by utilizing a temperature-resistant polymerase (so the polymerase does not need to be replaced each cycle) and fluorescent labels (allowing for automated product detection). In summary, PCR is a method to target a specific portion of the genome in order to increase its abundance. Key components in the PCR reaction include (in addition to the previously mentioned polymerase), 2 short oligonucleotide “primers” to initiate the amplification at a specific location and all four nucleotide building blocks for DNA. The PCR reaction occurs in a device called a thermocycler, which allows for precise temperature and reaction length control. Each PCR cycle consists of 3 reactions, illustrated below:",
                        "Annealing (50-70C: a critical step for reaction specificity, dependent on the GC content of the primers), to allow the primers to find the complementary sequence in the genome and hybridize to form a double stranded region. The primer sequences need to be carefully designed to only match the region surrounding the area of interest (one primer on each side) in the genome to ensure that only the ROI is amplified. The annealing temperature setting on the thermocycler is based on the melting temperature (the temperature at which 1/2 of the primers have dissociated from the template) of the primers.",
                        "Extension (68-75C: dependent on the polymerase): DNA synthesis, where new nucleotides are added to the 3’ end of the primers via hydrogen bonding, creating a new DNA strand complementary to one of the template strands.",
                        "This method allows lab workers to generate millions of copies of a relevant region of the genome to be used for analyses.",
                        "The early cycles feature exponential amplification: every cycle doubles the amount of DNA, with the rate of amplification eventually decreasing in later stages as reagent are exhausted."
                    ]
                },

                {
                    'title': "PCR Overview", "text": [
                        " In 1983 Dr. Kary Mullis was inspired to develop a method for in vitro (“in glass” i.e. outside of the living cell) DNA amplification, when he realized that short oligonucleotide “primers” could be designed to target specific sequences. PCR is an amplification method where the amount of target DNA is doubled at each step during the early, exponential phase of the reaction (replication slows during later stages as reagents run out and become rate-limiting). Two years later the first paper describing the practical application of PCR, as a method to amplify the gene for betaglobin as a diagnosis method for sickle cell anemia, was published. Mullis called this technique a polymerase-catalyzed chain reaction because the key enzyme is DNA polymerase and the copies of the template that are created act as more targets for the polymerase, causing exponential amplification.",
                        "*an enzyme that creates polymers of nucleotides by nucleotide addition to a growing chain*",
                        "This technique uses the same components and enzyme from DNA replication within cells, but it has been adapted for lab use. Over the years the original PCR protocol has been optimized by utilizing a temperature-resistant polymerase (so the polymerase does not need to be replaced each cycle) and fluorescent labels (allowing for automated product detection). In summary, PCR is a method to target a specific portion of the genome in order to increase its abundance. Key components in the PCR reaction include (in addition to the previously mentioned polymerase), 2 short oligonucleotide “primers” to initiate the amplification at a specific location and all four nucleotide building blocks for DNA. The PCR reaction occurs in a device called a thermocycler, which allows for precise temperature and reaction length control. Each PCR cycle consists of 3 reactions, illustrated below:",
                        "Annealing (50-70C: a critical step for reaction specificity, dependent on the GC content of the primers), to allow the primers to find the complementary sequence in the genome and hybridize to form a double stranded region. The primer sequences need to be carefully designed to only match the region surrounding the area of interest (one primer on each side) in the genome to ensure that only the ROI is amplified. The annealing temperature setting on the thermocycler is based on the melting temperature (the temperature at which 1/2 of the primers have dissociated from the template) of the primers.",
                        "Extension (68-75C: dependent on the polymerase): DNA synthesis, where new nucleotides are added to the 3’ end of the primers via hydrogen bonding, creating a new DNA strand complementary to one of the template strands.",
                        "This method allows lab workers to generate millions of copies of a relevant region of the genome to be used for analyses.",
                        "The early cycles feature exponential amplification: every cycle doubles the amount of DNA, with the rate of amplification eventually decreasing in later stages as reagent are exhausted."
                    ]
                },
                {
                    'title': "What is Aneuploidy ?", "text": [
                        "What is aneuploidy, and why is it important in laboratory diagnosis of genetic disorders?",
                        "* Aneuploidy refers to chromosomal abnormalities where there is a loss or gain of chromosomes not equal to a complete set.*",
                        "The normal number of chromosomes in human cells is 46, grouped as 23 pairs. Since these chromosomes are paired, this means that the number of chromosomes in one complete set is 23, and human cells are diploid",
                        "*chromosomes = structure that contains DNA and scaffold proteins required to compact the DNA so it will fit into the cell nucleus. Chromosomes from cells in metaphase (when chromosomes are at their most compact) can be identified under the microscope using relative size, centromere location and special banding*",
                        "*while haploid (n) = one complete set of chromosomes of a species. Diploid (2n) = 2 complete sets, which is 46 in the case of humans.*",
                        "In practical terms, this usually means a gain or loss of one chromosome. Most aneuploids are not compatible with life, as the extra genomic material creates an imbalance in the genetic material. Aneuploidy is typically due to chromosome nondisjunction during gamete formation.",
                        "*nondisjunction is the incorrect separation of chromosomes during anaphase, resulting in one daughter cell having an extra chromosome, and one cell missing a chromosome.*",
                        "In the diagnostic laboratory, aneuploidy occurs with 0.5% frequency in pregnancies carried to term, and 50% in spontaneous fetal loss. The most common types of aneuploidy are monosomy and trisomy.",
                        "*Monosomy: one copy of a chromosome. Not tolerated for autosomes.*",
                        "*Trisomy: 3 copies of a chromosome. Most autosomal trisomies are not compatible with life.*"
                    ]
                },
                {
                    'title': "What test for Aneuploidy ?", "text": [
                        " In 1983 Dr. Kary Mullis was inspired to develop a method for in vitro (“in glass” i.e. outside of the living cell) DNA amplification, when he realized that short oligonucleotide “primers” could be designed to target specific sequences. PCR is an amplification method where the amount of target DNA is doubled at each step during the early, exponential phase of the reaction (replication slows during later stages as reagents run out and become rate-limiting). Two years later the first paper describing the practical application of PCR, as a method to amplify the gene for betaglobin as a diagnosis method for sickle cell anemia, was published. Mullis called this technique a polymerase-catalyzed chain reaction because the key enzyme is DNA polymerase and the copies of the template that are created act as more targets for the polymerase, causing exponential amplification.",
                        "*an enzyme that creates polymers of nucleotides by nucleotide addition to a growing chain*",
                        "This technique uses the same components and enzyme from DNA replication within cells, but it has been adapted for lab use. Over the years the original PCR protocol has been optimized by utilizing a temperature-resistant polymerase (so the polymerase does not need to be replaced each cycle) and fluorescent labels (allowing for automated product detection). In summary, PCR is a method to target a specific portion of the genome in order to increase its abundance. Key components in the PCR reaction include (in addition to the previously mentioned polymerase), 2 short oligonucleotide “primers” to initiate the amplification at a specific location and all four nucleotide building blocks for DNA. The PCR reaction occurs in a device called a thermocycler, which allows for precise temperature and reaction length control. Each PCR cycle consists of 3 reactions, illustrated below:",
                        "Annealing (50-70C: a critical step for reaction specificity, dependent on the GC content of the primers), to allow the primers to find the complementary sequence in the genome and hybridize to form a double stranded region. The primer sequences need to be carefully designed to only match the region surrounding the area of interest (one primer on each side) in the genome to ensure that only the ROI is amplified. The annealing temperature setting on the thermocycler is based on the melting temperature (the temperature at which 1/2 of the primers have dissociated from the template) of the primers.",
                        "Extension (68-75C: dependent on the polymerase): DNA synthesis, where new nucleotides are added to the 3’ end of the primers via hydrogen bonding, creating a new DNA strand complementary to one of the template strands.",
                        "This method allows lab workers to generate millions of copies of a relevant region of the genome to be used for analyses.",
                        "The early cycles feature exponential amplification: every cycle doubles the amount of DNA, with the rate of amplification eventually decreasing in later stages as reagent are exhausted."
                    ]
                },
                {
                    'title': "Parental QF-PCR", "text": [
                        "These are the conditions that are assessed when performing prenatal QF-PCR:",
                        "Some of these conditions are present as mosaics, which can make diagnosis more challenging as some are not detected by this diagnostic test.",
                        "*mosaic: 2 or more genetically distinct populations arising from 1 zygote*",
                        "Prenatal QF-PCR is ordered as a reflex test in response to prenatal screens such as the Integrated Prenatal Screen (early screen during pregnancy (10-13.5 weeks) to test for PAPP-A (pregnancy associated plasma protein-A) or beta human chorionic gonadotrophin (hCG) and can include fetal ultrasound). Advanced maternal age (>40yrs at time of delivery) is another risk factor that may prompt QF-PCR to assess for trisomies.",
                        "*screen: identifies possible future problem i.e. identifies individuals at risk for future issues*",
                        "Note that for followup diagnostic testing, such as QF-PCR, a positive result does not confirm that the fetus is affected, just as a negative result does not eliminate the possibility the fetus is affected. However, a negative result can exclude the tested aneuploidies as a diagnosis.",
                        "QF-PCR will detect whole chromosomal aneuploidy, but not balanced structural rearrangements, such as translocations or inversions. The underlying cause of the aneuploidy (i.e. nondisjunction or unbalanced structural rearrangement) is also not determined. Complications such as maternal cell contamination (MCC) and confined placental mosaicism (CPM) may result in discrepancies between QF-PCR and karyotype results.",
                        "Examples of karyotypes showing chromosomal aneuploidy:"
                    ]
                },
                {
                    'title': "QF-PCR for Pregnancy Loss", "text": [
                        " In 1983 Dr. Kary Mullis was inspired to develop a method for in vitro (“in glass” i.e. outside of the living cell) DNA amplification, when he realized that short oligonucleotide “primers” could be designed to target specific sequences. PCR is an amplification method where the amount of target DNA is doubled at each step during the early, exponential phase of the reaction (replication slows during later stages as reagents run out and become rate-limiting). Two years later the first paper describing the practical application of PCR, as a method to amplify the gene for betaglobin as a diagnosis method for sickle cell anemia, was published. Mullis called this technique a polymerase-catalyzed chain reaction because the key enzyme is DNA polymerase and the copies of the template that are created act as more targets for the polymerase, causing exponential amplification.",
                        "*an enzyme that creates polymers of nucleotides by nucleotide addition to a growing chain*",
                        "This technique uses the same components and enzyme from DNA replication within cells, but it has been adapted for lab use. Over the years the original PCR protocol has been optimized by utilizing a temperature-resistant polymerase (so the polymerase does not need to be replaced each cycle) and fluorescent labels (allowing for automated product detection). In summary, PCR is a method to target a specific portion of the genome in order to increase its abundance. Key components in the PCR reaction include (in addition to the previously mentioned polymerase), 2 short oligonucleotide “primers” to initiate the amplification at a specific location and all four nucleotide building blocks for DNA. The PCR reaction occurs in a device called a thermocycler, which allows for precise temperature and reaction length control. Each PCR cycle consists of 3 reactions, illustrated below:",
                        "Annealing (50-70C: a critical step for reaction specificity, dependent on the GC content of the primers), to allow the primers to find the complementary sequence in the genome and hybridize to form a double stranded region. The primer sequences need to be carefully designed to only match the region surrounding the area of interest (one primer on each side) in the genome to ensure that only the ROI is amplified. The annealing temperature setting on the thermocycler is based on the melting temperature (the temperature at which 1/2 of the primers have dissociated from the template) of the primers.",
                        "Extension (68-75C: dependent on the polymerase): DNA synthesis, where new nucleotides are added to the 3’ end of the primers via hydrogen bonding, creating a new DNA strand complementary to one of the template strands.",
                        "This method allows lab workers to generate millions of copies of a relevant region of the genome to be used for analyses.",
                        "The early cycles feature exponential amplification: every cycle doubles the amount of DNA, with the rate of amplification eventually decreasing in later stages as reagent are exhausted."
                    ]
                }
            ],
            currentIndex: 0
        }
    }

    componentDidMount() {
        this.setState({ current: this.state.data[0] });
    }

    render() {


        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="col-12 bg-secondary mx-auto d-flex text-dark">
               
                <span className="mt-4 col-12 bg-secondary mx-auto d-flex flex-row justify-content-around align-items-start h-100 text-dark">
                    <Card className="col-3 mr-3" style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            {this.state.data.map((i, index) =>
                                <ListGroup.Item> 
                                    <Card.Link className={index === this.state.currentIndex ? "text-dark border-bottom ml-4 border-dark" : null} onClick={() => this.setState({currentIndex: index})}>{i.title}
                                    </Card.Link>
                                </ListGroup.Item>
                            )}

                        </ListGroup>
                    </Card>

                    <Card className="col-9 mb-3">
                   
                        <Card.Header className="col-12 mt-3 bg-info text-white" as="h5">{this.state.data[this.state.currentIndex].title}</Card.Header>
                        <Card.Body>
                            {/* <Card.Title>{this.state.current.title}</Card.Title> */}
                           
                            <Card.Text>
                            <PopOver/>
                                { this.state.data[this.state.currentIndex].text.map((x) => <p dangerouslySetInnerHTML={{ __html: x}} style={{fontSize:'1.2em'}} className="mt-2"></p>)}
                            </Card.Text>
                            <Button size="sm" onClick={() => this.setState({currentIndex: this.state.currentIndex === this.state.data.length ? 0 : this.state.currentIndex + 1})} variant="primary">NEXT</Button>
                        </Card.Body>
                    </Card>
                </span>
                {/* <Accordion className="col-7 m-3" defaultActiveKey={1}>

                    {this.state.data.map((i, index) =>
                        <Card>
                            <Card.Header className="bg-info">
                                <Accordion.Toggle as={Button} variant="link" eventKey={index + 1}>
                                    <h5 className="text-white text-monospace" style={{ letterSpacing: .5 }}>{i.title}</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={index + 1}>
                                <Card.Body>
                                    <div style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex flex-column align-items-start bg-white m-0 ">

                                        {i.text.map((x) => <p className="mt-2">{x}</p>)}

                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>)}
                </Accordion> */}
            </div>
        )
    }
}

export default BackgroundPage;