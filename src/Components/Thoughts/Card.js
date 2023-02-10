function Card({text}) {
    return (
        <div className='card'>
            <span className='remove-card'>&times;</span>
            <p>{text}</p>
        </div>
    );
}

export default Card;