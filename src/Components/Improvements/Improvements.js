import Card from "../Thoughts/Card";
import uuid from "react-uuid";

function Improvements({updateImprovements, improvements, updateImprovement, improvement}) {
    const handleChange = (value) => {
        updateImprovement(value);
    };
    const handleClick = (e) => {
        e.preventDefault();
        updateImprovements(improvement)
        updateImprovement('')
    };
    const removeCard = () => {}

    return (
        <div className="improvements">
            <p className='prompt'>Are there any things you would like to do differently tomorrow?</p>
            {improvements.length > 0 ?  
            <div className='cards-container'>
                {improvements.map(card => {
                    return <Card text={card} id={uuid()}/>
                })}
            </div> : ''}
            <input
                type='text'
                className='text-input'
                name='improvements'
                maxlength='50'
                onChange={e => handleChange(e.target.value)}
                ></input>

                {(improvements.length < 3 && improvement.length > 0) ?  
                    <input type='button'
                className='single-button'
                name='add-improvement'
                value='Add'
                onClick={e => handleClick(e)}
                ></input> 
                :
                <input type='button'
                className='single-button'
                name='add-improvement'
                value='Add'
                disabled='true'
                onClick={e => handleClick(e)}
                ></input>
                }
        </div>
    );
}

export default Improvements;