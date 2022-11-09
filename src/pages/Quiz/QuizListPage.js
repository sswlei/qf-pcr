import React from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ModuleCard from '../../components/General/ModuleCard';

const QuizListPage = () => {
    const navigate = useNavigate();
    const quizzes = [{
            title:"Quiz #1",
            description:"Quiz on QF-PCR",
            quiz_id:"quiz_1"
    }];

    return (
        <div style={{ height: '100%', minHeight: '100vh' }} className="col-12 d-flex border-2 flex-column justify-content-start mt-5 align-items-start col-12 h-100 text-dark">

            <h4 className="text-info" style={{ letterSpacing: 1, width:"100%",textAlign:"center" }}>Quizzes</h4>
            <Row style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex col-12 mx-auto flex-row justify-content-around align-items-center bg-white p-3 ">
                {quizzes.map((quiz,index)=>{
                    return <ModuleCard key={index} title={quiz.title} description={quiz.description} onClick={()=>navigate(quiz.quiz_id)}></ModuleCard>
                })}
            </Row>
        </div>
    )
}

export default QuizListPage;