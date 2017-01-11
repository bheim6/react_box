import React from 'react'

const Idea = ({title, body, id, destroy, update}) => {
  return(
    <div className='Idea'>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={ () => destroy(id) } >Destroy</button>
      <button onClick={ (event) => update(id, event) } >Update</button>
    </div>
  )
}

export default Idea;
