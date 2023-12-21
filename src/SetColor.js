import React from 'react'

const SetColor = ({ color, setColor, handleSubmit }) => {


    return (
        <form className="setColor" onSubmit={handleSubmit}>
                <label htmlFor="color">Color input</label>
                <input
                    autoFocus
                    id='Color'
                    type='text'
                    role='Color Selection'
                    placeholder='Add color name'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
        </form>
    )
}

export default SetColor