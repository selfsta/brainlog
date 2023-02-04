function Thoughts() {
    return (
        <div className='thoughts'>
            <p className='prompt'>Write down any thoughts you may have</p>
                <textarea 
                className='textbox'
                name='thoughts' 
                cols='50' 
                rows='5' 
                maxlength='300'></textarea><br/>
        </div>
    );
}

export default Thoughts;