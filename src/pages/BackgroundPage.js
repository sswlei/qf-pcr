import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Container, Card, ListGroup } from 'react-bootstrap';
import { useNavigate, useParams,useLocation } from 'react-router-dom';

import backgroundData from '../data/background';
function BackgroundPage() {

    const [currentTab, setCurrentTab] = useState(0);
    const [currentLocation,setCurrentLocation] = useState('');

    const { category } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const categories = Object.keys(backgroundData);

    useEffect(()=>{
        setCurrentTab(categories.indexOf(category));
    },[]);

    useEffect(()=>{
        setCurrentLocation(location.pathname);
    },[location]);

    const onClickNext = (nextCategory) => {
        window.scrollTo(0, 0);
        navigate("/background/"+getNextCategory());
    }

    const getNextCategory = () => {
        let nextTab = currentTab;
        console.log("nextTab",nextTab);
        if (currentTab < categories.length){
            nextTab++;
            setCurrentTab(nextTab);
            console.log("nextTab updated",nextTab);

        }
        console.log("nextTab cate",categories[nextTab]);

        return categories[nextTab];
    }


    return (
        <Container className="text-dark py-4 mt-3">
            <Row>
                <Col className='col-sm-3'>
                    <Card className="mb-3">
                        <ListGroup variant="flush" >
                            {categories.map(function(key,index) {
                                return (
                                    <ListGroup.Item 
                                        onClick={()=>{setCurrentTab(categories.indexOf(key)); navigate("/background/"+key);}} 
                                        key={index} 
                                        className={currentLocation==="/background/"+key ?'bg-info text-white':''} 
                                        style={{cursor:"pointer"}}> 

                                        {backgroundData[key].title}
                                        
                                    </ListGroup.Item>
                                )
                            }, this)}
                        </ListGroup>
                    </Card>
                </Col>

                <Col className='col-sm-8'>
                    <Card className="px-3 py-3">
                        <Card.Header className="bg-info text-white" as="h5">{backgroundData[category].title}</Card.Header>
                        <Card.Body as="div">                                        
                            {backgroundData[category].content}
                        </Card.Body>
                        
                        <Card.Footer style={{textAlign:'right'}} className="bg-transparent border-white">
                            <Button size="sm" onClick={onClickNext} variant="primary" hidden={currentTab+1>=categories.length}>NEXT</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

        </Container>
        
    )
}

export default BackgroundPage;