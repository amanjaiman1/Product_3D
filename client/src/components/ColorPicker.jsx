import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'
import { color } from 'framer-motion'

const ColorPicker = () => {
  const snap = useSnapshot(state);


  return (
    <div className="absolute left-full ml-3"
    >
      <SketchPicker 
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
/*
import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'
import { color } from 'framer-motion'

const ColorPicker = () => {
  const snap = useSnapshot(state);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {isHovered && (
        <div className="absolute top-0 -mt-8 text-center bg-gray-200 py-1 px-2 rounded-md">
          Color Picker
        </div>
      )}
      <div
        className="absolute left-full ml-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <SketchPicker 
          color={snap.color}
          disableAlpha
          onChange={(color) => state.color = color.hex}
        />
      </div>
    </div>
  )
}

export default ColorPicker
*/