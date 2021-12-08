import React, { Component } from 'react';
import NormalMale from '../../assets/normalMale.JPG';
import ReactImageMagnify from 'react-image-magnify';
import { DropdownButton, Dropdown, Button, ButtonGroup, Card, Row, Container } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Chromosome, Allele, AMEL, TAF9L, SelectionType } from "../../constants/GuidedPracticeConstants"
class PrenatalRadDemo extends Component {

    constructor(props) {
        super(props);
        this.markerData = [
            {
                "id":"DXS6803",
                "type":SelectionType.chromOnly,
                "chrom_answer":Chromosome.chx.value,
                "user_selected_chrom":""
            },
            {
                "id":"D21S1435",
                "type":SelectionType.chromAndAllele,
                "chrom_answer":Chromosome.ch21.value,
                "allele_answer":Allele.diallelic.value
            },
            {
                "id":"D21S11",
                "type":SelectionType.chromAndAllele,
                "chrom_answer":Chromosome.ch21.value,
                "allele_answer":Allele.uninformative.value
            },
            {
                "id":"D21S1437",
                "type":SelectionType.chromAndAllele,
                "chrom_answer":Chromosome.ch21.value,
                "allele_answer":Allele.diallelic.value
            },
            {
                "id":"D13S634",
                "type":SelectionType.chromAndAllele,
                "chrom_answer":Chromosome.ch13.value,
                "allele_answer":Allele.diallelic.value
            },
            {
                "id":"D18S535",
                "type":SelectionType.chromAndAllele,
                "chrom_answer":Chromosome.ch18.value,
                "allele_answer":Allele.diallelic.value
            },
            {
                "id":"AMEX",
                "type":SelectionType.amel,
                "answer":AMEL.xy.value
            },
            {
                "id":"TAF9L",
                "type":SelectionType.taf9l,
                "answer":TAF9L.onexchrom.value
            }
        ]
        this.getDropdowns = this.getDropdowns.bind(this);
    }

    getDropdowns(marker){
        if (marker.type==="chromAndAllele"){
            return <div className="mb-3">
                <Button variant="secondary">{marker.id}</Button>
                <Dropdown className="mt-3 d-inline" as={ButtonGroup}>
                    <label className="mx-0 my-0 px-4 py-0" style={{border:"1px solid gray",lineHeight:"38px"}}>Select</label>
                    <Dropdown.Toggle/>
                    <Dropdown.Menu alignRight>
                        <Dropdown.Item>{Chromosome.ch13.name}</Dropdown.Item>
                        <Dropdown.Item>{Chromosome.ch18.name}</Dropdown.Item>
                        <Dropdown.Item>{Chromosome.ch21.name}</Dropdown.Item>
                        <Dropdown.Item>{Chromosome.chx.name}</Dropdown.Item>
                        <Dropdown.Item>{Chromosome.chy.name}</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown> 
                <Dropdown className="mt-3 d-inline" as={ButtonGroup}>
                    <label className="mx-0 my-0 px-4 py-0" style={{border:"1px solid gray",lineHeight:"38px"}}>Select</label>
                    <Dropdown.Toggle/>
                    <Dropdown.Menu alignRight>
                        <Dropdown.Item>{Allele.uninformative.name}</Dropdown.Item>
                        <Dropdown.Item>{Allele.diallelic.name}</Dropdown.Item>
                        <Dropdown.Item>{Allele.triallelic.name}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
            </div>
        }
        if (marker.type==="amel"){
            return <div className="mb-3">
                <Button variant="secondary">{marker.id}</Button>
                <Dropdown className="mt-3 d-inline" as={ButtonGroup}>
                    <label className="mx-0 my-0 px-4 py-0" style={{border:"1px solid gray",lineHeight:"38px"}}>Select</label>
                    <Dropdown.Toggle/>
                    <Dropdown.Menu alignRight>
                        <Dropdown.Item>{AMEL.xx.name}</Dropdown.Item>
                        <Dropdown.Item>{AMEL.xy.name}</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown> 
            </div>
        }
        if (marker.type==="chromOnly"){
            return <div className="mb-3">
                <Button variant="secondary">{marker.id}</Button>
                <Dropdown className="mt-3 d-inline" as={ButtonGroup}>
                    <label className="mx-0 my-0 px-4 py-0" style={{border:"1px solid gray",lineHeight:"38px"}}>Select</label>
                    <Dropdown.Toggle/>
                    <Dropdown.Menu alignRight>
                        <Dropdown.Item>{Chromosome.ch13.name}</Dropdown.Item>
                        <Dropdown.Item>{Chromosome.ch18.name}</Dropdown.Item>
                        <Dropdown.Item>{Chromosome.ch21.name}</Dropdown.Item>
                        <Dropdown.Item>{Chromosome.chx.name}</Dropdown.Item>
                        <Dropdown.Item>{Chromosome.chy.name}</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown> 
            </div>
        }
        if (marker.type==="taf9l"){
            return <div className="mb-3">
                <Button variant="secondary">{marker.id}</Button>
                <Dropdown className="mt-3 d-inline" as={ButtonGroup}>
                    <label className="mx-0 my-0 px-4 py-0" style={{border:"1px solid gray",lineHeight:"38px"}}>Select</label>
                    <Dropdown.Toggle/>
                    <Dropdown.Menu alignRight>
                        <Dropdown.Item>{TAF9L.onexchrom.name}</Dropdown.Item>
                        <Dropdown.Item>{TAF9L.twoxchrom.name}</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown> 
            </div>
        }
    }
    

    render() {

        return (
            <Container>
                <Row>
                <Card className="col-7">
                    <Card.Body>
                        <TransformWrapper initialScale={0.3} minScale={0.3} maxScale={2} centerOnInit={true}>
                            <TransformComponent wrapperStyle={{width:"100%",height:500}}>
                                <img src={NormalMale} alt="Normal Male" />
                            </TransformComponent>
                        </TransformWrapper>
                    </Card.Body>
                </Card>
                <Card  className="col-5">
                    <Card.Body>
                        {this.markerData.map(function(marker, i){
                            return <div>
                                {this.getDropdowns(marker)}
                            </div>
                        },this)}

                    </Card.Body>

                </Card>
</Row>
            </Container>
        )
    }
}

export default PrenatalRadDemo;