import React from 'react'
import SetColor from './SetColor'
import Square from './Square'
import { useState } from 'react'

const Content = () => {
  const [color, setColor] = useState('');
  const [colors, setNewColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setColor(colors);
  }

  return (
    <main>
        <Square
            color={color}
        />
        <SetColor 
            handleSubmit={handleSubmit}
            color={color}
            setColor={setColor}
        />
    </main>
  )
}

export default Content