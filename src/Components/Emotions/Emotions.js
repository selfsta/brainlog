function Emotions() {
return (<div>
    <p className='prompt'>Select up to 3 emotions you feel the strongest right now.</p><br/>
    <div className='emotions-container'>
        <div className='emotions-left'>
            <button className='btn-emo'>Joy</button>
            <button className='btn-emo'>Love</button>
            <button className='btn-emo'>Fear</button>
        </div>
        <div className='emotions-right'>
            <button className='btn-emo'>Sadness</button>
            <button className='btn-emo'>Anger</button>
            <button className='btn-emo'>Surprise</button>
        </div>
    </div>
</div>);
}

export default Emotions;