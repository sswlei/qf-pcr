import { Dropdown, ButtonGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import "./MarkerDropdown.css";
const MarkerDropdown = (props) => {
    
    const [isCorrect,setCorrect] = useState(false);
    const [selectedAnswer,setAnswer] = useState("");
    const showEvaluation = props.showEvaluation?props.showEvaluation:false;

    const getAnswerClass = () => {
        if (selectedAnswer === "" || selectedAnswer === null){
            return "";
        }
        else{
            if (!showEvaluation){
                return "answered";
            }
            if (isCorrect){
                return "correct";
            }
            else{
                return "incorrect";
            }
        }
                
    }
    const onAnswerSelect = (option) => {
        setAnswer(option.name);
        if (props.questionData.answer == option.value){
            setCorrect(true);
        }
        else{
            setCorrect(false);
        }
    }
    return (
        <Dropdown className={`mb-3 mr-2 markerDropdown ${getAnswerClass()}`} as={ButtonGroup}>
            <label className={`mx-0 my-0 px-4 py-0 rounded-left`}>
                {selectedAnswer===""?"Select":selectedAnswer} 
            </label>
            <Dropdown.Toggle style={{height:40}}/>
            <Dropdown.Menu alignright>
                {props.questionData.options.map(function(option,index){
                    return <Dropdown.Item key={index} onClick={()=>{onAnswerSelect(option)}}>{option.name}</Dropdown.Item>
                },this)}
            </Dropdown.Menu>
        </Dropdown> 
    )
}
export default MarkerDropdown