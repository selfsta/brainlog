import CSSSlider from "../Components/Slider/CSSSlider";
import { useState } from "react";
import Emotions from "../Components/Emotions/Emotions";
import Thoughts from "../Components/Thoughts/Thoughts";
import Improvements from "../Components/Improvements/Improvements";

function Questionaire () {
    const [ wellness, setWelleness ] = useState(50);
    const [ emotions, setEmotions ] = useState([]);
    const [ thoughts, setThoughts ] = useState('');
    const [ improvements, setImprovements ] = useState([]);

    const updateWellness = (newValue) => {
        setWelleness(newValue);
    };

    return (
        <div>
            <form>
                <CSSSlider wellness={wellness} updateWellness={updateWellness}/>
                <Emotions/>
                <Thoughts/>
                <Improvements/>
            </form>
        </div>

        
    );
}

export default Questionaire;