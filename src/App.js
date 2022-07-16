import logo from './logo.svg';
import './App.css';
import { Form } from 'antd'
import React from 'react';
import * as ReactDOM from "react-dom";
import {Routes , Route} from 'react-router-dom';
import Home from './Home'
import Step1 from '../src/components/steps/step1'
import Quiz1 from '../src/components/quiz/quiz1';
import Step2 from '../src/components/steps/step2'
import Quiz2 from '../src/components/quiz/quiz2';
import Step3 from '../src/components/steps/step3' 
import Quiz3 from '../src/components/quiz/quiz3';
import Step4 from '../src/components/steps/step4'
import Quiz4 from '../src/components/quiz/quiz4';
import Step5 from '../src/components/steps/step5'
import Quiz5 from '../src/components/quiz/quiz5';
import Certificate from './form';


const FormSignin = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/step1" element={ <Step1/> } />
        <Route path="/quiz1" element={ <Quiz1/> } />
        <Route path="/step2" element={ <Step2/> } />
        <Route path="/quiz2" element={ <Quiz2/> } />
        <Route path="/step3" element={ <Step3/> } />
        <Route path="/quiz3" element={ <Quiz3/> } />
        <Route path="/step4" element={ <Step4/> } />
        <Route path="/quiz4" element={ <Quiz4/> } />
        <Route path="/step5" element={ <Step5/> } />
        <Route path="/quiz5" element={ <Quiz5/> } />
        <Route path="/form" element={ <Certificate/> } />

        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
    
  );
}

export default App;
