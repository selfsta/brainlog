import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Questionaire from './Containers/QuestionaireContainer';

function App() {
  return (
    <div>
      <div className='bg'></div>
      <div className='content'>
        <h1 id='logo'>BrainLog</h1>
        <Questionaire/>
      </div>
    </div>
  );
}

export default App;
