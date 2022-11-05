import React, { useState } from 'react';
import { Button, Row, Tab, Col, Nav, Image, Container, Card, ListGroup } from 'react-bootstrap';
import { useOutletContext } from "react-router-dom";

function BackgroundTab(props){
    const data = useOutletContext();
    return (
        <>
            <Card.Header className="bg-info text-white" as="h5">{data.title}</Card.Header>
            <Card.Body as="div">                                        
                {data.content}
            </Card.Body>
        </>
    );
}
export default BackgroundTab;