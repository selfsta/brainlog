function Questionaire () {
    return (
        <div>
            <form>
                <p>Which percentage best describes your wellness level today?</p><br/>

                <input 
                className='number-input'
                name='wellness'
                type='number' 
                step='25' 
                min='0' 
                max='100' 
                placeholder='Select percentage'></input><br/>

                <p>Select up to 3 emotions you feel the strongest right now.</p><br/>

                <label><input 
                type='checkbox' 
                className='single-check' 
                name='joy' 
                value='joy'/> 
                Joy
                </label><br/>

                <label><input 
                type='checkbox' 
                className='single-check' 
                name='love' 
                value='love'/> 
                Love
                </label><br/>

                <label><input 
                type='checkbox' 
                className='single-check' 
                name='fear' 
                value='fear'/> 
                Fear
                </label><br/>

                <label><input 
                type='checkbox' 
                className='single-check' 
                name='sadness' 
                value='sadness'/> 
                Sadness
                </label><br/>

                <label><input 
                type='checkbox' 
                className='single-check' 
                name='anger' 
                value='anger'/> 
                Anger
                </label><br/>

                <label><input 
                type='checkbox' 
                className='single-check' 
                name='surprise' 
                value='surprise'/> 
                Surprise
                </label><br/>
                
                <p>Write down any thoughts you may have</p>
                <textarea 
                className='textbox'
                name='thoughts' 
                cols='50' 
                rows='5' 
                maxlength='300'></textarea><br/>

                <p>Are there any things you would like to do differently tomorrow?</p>
                <input 
                type='text' 
                className='text-input' 
                name='improvements'
                maxlength='50'></input>

                <input type='button' 
                className='single-button'
                name='add-improvement'
                value="Add"></input>
            </form>
        </div>

        
    );
}

export default Questionaire;