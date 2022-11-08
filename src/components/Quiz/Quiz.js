import React, { useState, useEffect } from 'react';
import { Button, Alert, Form, ListGroupItem, Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { setModuleComplete } from '../../util/utils';

const Quiz = () => {
    const [user_input,setUserInput] = useState(false);
    const [showFeedback,setShowFeedback] = useState(false);
    const [submitted,setSubmitted] = useState(false);
    const [quizData,setQuizData] = useState([]);
    const {quizId} = useParams();
    const [userData,setUserData] = useState({"mcq_questions":{},"tf_questions":{}});
    const [answerResult,setAnswerResult] = useState([]);
    const [numCorrect, setNumCorrect] = useState(0);
    useEffect(()=>{
        fetch('https://610174ghz0.execute-api.us-west-2.amazonaws.com/default/get_quiz_data?quiz_id='+quizId)
        .then((response) => response.json())
        .then((data) => {
            getRandomQuestions(data.Item);
        });
    },[]);
    
    const answerQuestions = (input,data) => {
        let newData = {...userData};
        if (data.type === "mcq"){
            newData.mcq_questions[data.title] = {
                title:data.title,
                answer:input
            }
        }
        if (data.type === "tf"){
            newData.tf_questions[data.title] = {
                title:data.title,
                answer:input
            }
        }
        setUserData(newData);
    }
    const evaluateQuiz = (data) => {
        setAnswerResult(data);
        let score = 0;
        let newUserData = {...userData}
        data.map((answerData)=>{
            if (answerData.title in userData.mcq_questions){
                newUserData.mcq_questions[answerData.title].correct = answerData.correct;
                newUserData.mcq_questions[answerData.title].feedback = answerData.feedback;

            }
            else if (answerData.title in userData.tf_questions){
                newUserData.tf_questions[answerData.title].correct = answerData.correct;
                newUserData.tf_questions[answerData.title].feedback = answerData.feedback;
            }
            if (answerData.correct){
                score++;
            }

        })
        setNumCorrect(score);
        setUserData(newUserData);
        

    }
    const submitQuiz = () => {
        let dataToSend = {"mcq_questions":[],"tf_questions":[]}
        Object.keys(userData.mcq_questions).map((key)=>{
            dataToSend.mcq_questions.push(userData.mcq_questions[key]);
        })
        Object.keys(userData.tf_questions).map((key)=>{
            dataToSend.tf_questions.push(userData.tf_questions[key]);
        })
        console.log(dataToSend);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(dataToSend),
            redirect: 'follow'
        };

        fetch("https://610174ghz0.execute-api.us-west-2.amazonaws.com/default/submit_quiz?quiz_id="+quizId, requestOptions)
        .then(response => response.text())
        .then(result => evaluateQuiz(JSON.parse(result)))
        .catch(error => console.log('error', error));
    }

    const checkCorrect = (title) => {
        if (title in userData.mcq_questions){
            return userData.mcq_questions[title].correct;
        }
        if (title in userData.tf_questions){
            return userData.tf_questions[title].correct;
        }
    }

    
    const getFeedback = (title) => {
        if (title in userData.mcq_questions){

            return userData.mcq_questions[title].feedback;
        }
        if (title in userData.tf_questions){
            return userData.tf_questions[title].feedback;
        }
    }

    const getRandomQuestions = (data) => {
        let list = [];
        let mcq_s = data.mcq_questions;
        let tf_s = data.tf_questions;


        while (list.length<6) {
            const random = Math.floor(Math.random() * mcq_s.length);
            if (list.indexOf(mcq_s[random]) !== -1) {
                continue;
            };
            list.push(mcq_s[random]);

        }
    
        while (list.length<10) {
            const random = Math.floor(Math.random() * tf_s.length);
            if (list.indexOf(tf_s[random]) !== -1) {
                continue;
            };
            list.push(tf_s[random]);

        }
        setQuizData(list);
        setUserInput(false);
        setShowFeedback(false);
    }
    return (

        <Card >
            <Form>
            <Card.Header className="m-3" as="h5">Quiz #1</Card.Header>

            <ol>
                {quizData.map((i, index) => 
                <li key={`list+${index}`}> 
                <Card.Body>
                    <Card.Title>{i.title}</Card.Title>
                
                    
                        <div onChange={(event) => answerQuestions(event.target.value,i)} key={`inline-radio`} className="mb-3">

                            {i.type == 'mcq' ?
                                <ol type="a">
                                    {i.choices.map((q,x) =>
                                        <li><Form.Check
                                            key={x}
                                            inline
                                            label={q}
                                            value={q}
                                            name={`group${index}`}
                                            type={'radio'}

                                        /></li>)}

                                </ol>
                                :
                                <span>
                                    <Form.Check
                                        inline
                                        label="True"
                                        value={true}
                                        name={`group${index}`}
                                        type={'radio'}

                                    />
                                    <Form.Check
                                        inline
                                        label="False"
                                        value={false}
                                        name={`group${index}`}
                                        type={'radio'}

                                    />
                                </span>


                            }
                            {showFeedback ? 
                            <Alert className="m-1" variant={checkCorrect(i.title) ? "success" : "danger"} >
                            <Alert.Heading>{checkCorrect(i.title) ? 'Correct' : 'Incorrect' }</Alert.Heading>
                            <p>{getFeedback(i.title)}</p>
                            {/* {checkCorrect(i.title) ?    
                            <p>
                                {getFeedback(i.title)}
                            </p>             :
                            <p>
                                Correct Answer: {i.type === 'tf' ? i.answer : i.choices[i.answer]}
                            </p> */}
                            
                        </Alert> : null}
                            
                        </div>
                    

                </Card.Body>
                </li>)}

            </ol>


            { showFeedback ? <Card.Footer className=""> Score: { numCorrect + ' / ' + quizData.length }</Card.Footer> : null}
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-end">
                    {
                        (!submitted)?
                            <Button 
                            type="submit"
                            onClick={() => {
                                    submitQuiz();
                                    setShowFeedback(true);
                                    setSubmitted(true);
                                    window.scrollTo(0, 0);
                                    // if (this.checkAllCorrect()){
                                    //     setModuleComplete("Quiz #1",true)
                                    // }
                                }
                            } 
                            // disabled={!user_input} 
                            size="sm" 
                            variant="primary">Submit
                            </Button>:null
                    }
                    {
                        (submitted )?
                            <Button 
                            onClick={()=>{window.scrollTo(0, 0);window.location.reload();}} 
                            size="sm" 
                            variant="primary">Reset
                            </Button>:null
                    }
                </ListGroupItem>
            </ListGroup>
            </Form>
        </Card>
    )
}
// class Quiz extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             user_input: false,
//             showFeedback: false,
//             submitted:false
//         }
//         this.checkAllCorrect = this.checkAllCorrect.bind(this);
//     }

//     componentDidMount() {
//         this.getRandomQuestions();
//     }

//     getRandomQuestions() {
//         let list = [];
//         let mcq_s = this.props.quizData.mcq_questions;
//         let tf_s = this.props.quizData.tf_questions;


//         while (list.length<6) {
//             const random = Math.floor(Math.random() * mcq_s.length);
//             if (list.indexOf(mcq_s[random]) !== -1) {
//                 continue;
//             };
//             list.push(mcq_s[random]);

//         }
    
//         while (list.length<10) {
//             const random = Math.floor(Math.random() * tf_s.length);
//             if (list.indexOf(tf_s[random]) !== -1) {
//                 continue;
//             };
//             list.push(tf_s[random]);

//         }
        
//         this.setState({ data: list, user_input: false, showFeedback: false });
//     }

//     checkAllCorrect(){
//         if (this.state.data.filter((i) => i.correct).length === this.state.data.length){
//             return true;
//         }
//         return false;
//     }

//     answerQuestions(index, input) {
//         this.setState({ ...this.state.data, })

//         let questions = [...this.state.data];
//         questions[index] = { ...questions[index], user_input: input, 
            
            
//             correct: questions[index].type == "mcq" ? input == questions[index].choices[questions[index].answer] :
        
//             input == questions[index].answer
//         };

//         let userInputRec = questions.filter((i) => i.user_input);

//         this.setState({ data: questions, user_input: userInputRec.length === questions.length });
//     }

//     render() {


//         return (

//                 <Card >
//                     <Card.Header className="m-3" as="h5">Quiz #1</Card.Header>

//                     <ol>
//                         {this.state.data.map((i, index) => <li> <Card.Body>
//                             <Card.Title>{i.title}</Card.Title>
//                             <Card.Text>
//                                 <div onChange={(i) => this.answerQuestions(index, i.target.value)} key={`inline-radio`} className="mb-3">

//                                     {i.type == 'mcq' ?
//                                         <ol type="a">
//                                             {i.choices.map((q) =>
//                                                 <li><Form.Check
//                                                     key={q}
//                                                     inline
//                                                     label={q}
//                                                     value={q}
//                                                     name={`group${index}`}
//                                                     type={'radio'}

//                                                 /></li>)}

//                                         </ol>
//                                         :
//                                         <span>
//                                             <Form.Check
//                                                 inline
//                                                 label="True"
//                                                 value={true}
//                                                 name={`group${index}`}
//                                                 type={'radio'}

//                                             />
//                                             <Form.Check
//                                                 inline
//                                                 label="False"
//                                                 value={false}
//                                                 name={`group${index}`}
//                                                 type={'radio'}

//                                             />
//                                         </span>


//                                     }
//                                     {this.state.showFeedback ? 
//                                     <Alert className="m-1" variant={i.correct ? "success" : "danger"} >
//                                     <Alert.Heading>{i.correct ? 'Correct' : 'Incorrect' }</Alert.Heading>
//                                     {i.correct ?    
//                                     <p>
//                                         {i.feedback}
//                                     </p>             :
//                                     <p>
//                                         Correct Answer: {i.type === 'tf' ? i.answer : i.choices[i.answer]}
//                                     </p>}
//                                 </Alert> : null}
                                    
//                                 </div>
//                             </Card.Text>

//                         </Card.Body></li>)}

//                     </ol>


//                     { this.state.showFeedback ? <Card.Footer className=""> Score: { this.state.data.filter((i) => i.correct).length + ' / ' + this.state.data.length }</Card.Footer> : null}
//                     <ListGroup className="list-group-flush">
//                         <ListGroupItem className="d-flex justify-content-end">
//                             {
//                                 (!this.state.submitted)?
//                                     <Button 
//                                     onClick={() => {
//                                             this.setState({showFeedback: true,submitted:true});
//                                             window.scrollTo(0, 0);
//                                             if (this.checkAllCorrect()){
//                                                 setModuleComplete("Quiz #1",true)
//                                             }
//                                         }
//                                     } 
//                                     disabled={!this.state.user_input} 
//                                     size="sm" 
//                                     variant="primary">Submit
//                                     </Button>:null
//                             }
//                             {
//                                 (this.state.submitted && !this.checkAllCorrect())?
//                                     <Button 
//                                     onClick={()=>{window.scrollTo(0, 0);window.location.reload();}} 
//                                     size="sm" 
//                                     variant="primary">Reset
//                                     </Button>:null
//                             }
//                         </ListGroupItem>
//                     </ListGroup>

//                 </Card>
//         )
//     }
// }

export default Quiz;