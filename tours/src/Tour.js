import React, {useState} from 'react'

const Tour = ({id, name, info, image, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false)
  return (
    <section>
        <img src={image} alt={name} />
        <h5>{name}</h5>
        <p>{price}</p>
        <h4>{readMore ? info :`${info.substring(0,150)}...`}
        <button onClick={() => setReadMore(!readMore)}>
        {readMore ? "show less" : "read more"}
        </button>
        </h4>
        <button onClick={(() => removeTour(id))}> Not Intereset</button>
    </section>
  )
}

export default Tour