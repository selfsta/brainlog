function Emotions({updateEmotions}) {
    const handleChange = (value) => {
        updateEmotions(value);
    };
    const handleClick = (e) => {
        e.preventDefault();
        handleChange(e.target.value);
    };

return (<div>
    <p className='prompt'>Select up to 3 emotions you feel the strongest right now.</p><br/>
    <div className='emotions-container'>
        <div className='emotions'>
            <button className='btn-emo' value='joy' onClick={e => handleClick(e)}>Joy</button>
            <button className='btn-emo' value='love' onClick={e => handleClick(e)}>Love</button>
            <button className='btn-emo' value='fear' onClick={e => handleClick(e)}>Fear</button>
        </div>
        <div className='emotions'>
            <button className='btn-emo' value='sadness' onClick={e => handleClick(e)}>Sadness</button>
            <button className='btn-emo' value='anger' onClick={e => handleClick(e)}>Anger</button>
            <button className='btn-emo' value='surprise' onClick={e => handleClick(e)}>Surprise</button>
        </div>
    </div>
</div>);
}

export default Emotions;