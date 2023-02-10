import { useState } from "react";
import uuid from "react-uuid";
import CSSSlider from "../Components/Slider/CSSSlider";
import Emotions from "../Components/Emotions/Emotions";
import Thoughts from "../Components/Thoughts/Thoughts";
import Improvements from "../Components/Improvements/Improvements";

function Questionaire () {
    const [ wellness, setWelleness ] = useState(50);
    const [ emotions, setEmotions ] = useState([]);
    const [ thoughts, setThoughts ] = useState('');
    const [improvement, setImprovement] = useState('');
    const [ improvements, setImprovements ] = useState([]);

    const updateWellness = (newValue) => {
        setWelleness(newValue);
    };
    const updateEmotions = (newValue) => {
        setEmotions(prev => {
            if (prev.includes(newValue)) {
                return prev.filter(word => word !== newValue);
            } 

            if (prev.length < 3) {
                return [...prev, newValue]
            } else {
                return [...prev, newValue].slice(1,4);
            }
        });   
    };
    const updateThoughts = (newValue) => {
        setThoughts(newValue);
    };
    const updateImprovement = (newValue) => {
        setImprovement(newValue);
    };
    const updateImprovements = (newValue) => {
        if (improvements.length < 3) {
            setImprovements(prev => {
                return [...prev, newValue];
            });
        } else {
            return improvements;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const unique = uuid();
        alert(`${unique}, ${wellness}, ${emotions}, ${thoughts}, ${improvements}`);
    }
    return (
        <div className='questionaire-form'>
            <form autoComplete="off">
                <CSSSlider updateWellness={updateWellness}/>
                <Emotions updateEmotions={updateEmotions}/>
                <Thoughts updateThoughts={updateThoughts}/>
                <Improvements updateImprovements={updateImprovements} updateImprovement={updateImprovement} improvement={improvement} improvements={improvements} />
                {(wellness && emotions.length > 0 ) ? 
                    <input type='submit' className='submit-button' value='Submit' onSubmit={e => handleSubmit(e)}></input>
                    :
                    <input type='submit' className='submit-button' value='Submit' disabled></input>}
            </form>
        </div>

        
    );
}

export default Questionaire;