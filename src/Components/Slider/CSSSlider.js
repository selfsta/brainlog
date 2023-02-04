import faces from './faces.png';


function CSSSlider({wellness, updateWellness}) {
    const handleChange = (value) => {
        updateWellness(value);
    }
    return (
        <div>
            <p className='prompt'>Which percentage best describes your wellness level today?</p><br/>
            <div className='faces-container'>
                <img  id='faces' src={faces} alt=''/>
                <img  id='faces-blur' src={faces} alt=''/>
            </div>
            <div className="slidecontainer">
                <input type='range' min='0' max='100' step='10' className='slider' id='wellness' onChange={(e) => handleChange(e.target.value)}></input>
            </div>        
        </div>
    );
}

export default CSSSlider;