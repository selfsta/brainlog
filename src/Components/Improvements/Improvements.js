function Improvements() {
    return (
        <div className="improvements">
            <p className='prompt'>Are there any things you would like to do differently tomorrow?</p>
            <input
                type='text'
                className='text-input'
                name='improvements'
                maxlength='50'></input>

            <input type='button'
                className='single-button'
                name='add-improvement'
                value="Add"></input>
        </div>
    );
}

export default Improvements;