import React from 'react'
import Tour from './Tour'
const Tours = ({tours, removeTour}) => {
  return (
    <section>

    <div> Our Tours</div>
    <div>
        {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
    </div>
    </section>
  )
}

export default Tours