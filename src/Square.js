import React from 'react'


const Square = ({ color}) => {

  return (
    <form className="colorSet"  >
      <label htmlFor="square">Color output</label>
      <input
          style={{ backgroundColor: color }}
          id='Square'
          type='text'
          role='Color Display'
          placeholder='Empty Value'
          value={color}
          // disabled
      />
    </form>
  )
}

export default Square