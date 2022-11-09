import React, { useEffect, useState } from 'react';
import { Container,ListGroup,Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './PracticeCaseListPage.css'

const PracticeCaseListPage = (props) => {
    const [caseList,setCaseList] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('https://610174ghz0.execute-api.us-west-2.amazonaws.com/default/get_case_id')
        .then((response) => response.json())
        .then((data) => {
            let cases = [];
            data.Items.map((item,index)=>{
                cases.push({
                    case_id: item.case_id.S,
                    case_name:item.case_name.S
                });
            });
            cases.sort((a,b)=>{ //sort cases based on which case id is higher
                if ( a.case_id < b.case_id ){
                    return -1;
                  }
                  if ( a.case_id > b.case_id ){
                    return 1;
                  }
                  return 0;
            });
            setCaseList(cases);
        });
    },[]);

    return (
        <Container>
            <h2 className='my-3 text-info text-monospace text-center'>Practice Cases</h2>
            <div className="px-5 py-4">
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                    <ListGroup className="mb-3">
                {caseList.length>0?
                    caseList.map((item,index)=>{
                    return (
                        <ListGroup.Item className="practiceList_item" key={index} onClick={()=>navigate(item.case_id)}>
                            {item.case_name}
                        </ListGroup.Item>
                    )
                    }):
                    <ListGroup.Item className="text-secondary">No practice cases available</ListGroup.Item>
                }
            </ListGroup>
                    </Col>
                    <Col lg={3}></Col>

                </Row>
           

            </div>
        </Container>
    )
}

export default PracticeCaseListPage;