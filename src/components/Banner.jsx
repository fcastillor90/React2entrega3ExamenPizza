import React from 'react'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='contenedorimg'>
        <img className='foto' src={fotoBanner} alt="" />
        <div className='titulo'>
            <h1>¡Pizzería Mamma Mia!</h1>
            <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </div>

    </div>
  )
}

export default Banner