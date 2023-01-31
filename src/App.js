import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Questionaire from './Containers/QuestionaireContainer';

function App() {
  return (
    <div>
      <div className='overlay1'></div>
      <div className='overlay2'></div>
      <div className='content'>
        <h1>BrainLog</h1>
        <Questionaire/>
      </div>
    </div>
  );
}

export default App;
