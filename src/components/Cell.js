import React from 'react'
import { TETROMINOS } from 'tetrominos'

const Cell = ({ type }) => (
    <div
      className='cell'
      style={
        {
          background: `rgba(${TETROMINOS[type].color}, 0.8)`,
          border: `${type === 0 ? '0px solid' : '4px solid'}`,
          borderBottomColor: `rgba(${TETROMINOS[type].color}, 0.1)`,
          borderRightColor: `rgba(${TETROMINOS[type].color}, 1)`,
          borderLeftColor: `rgba(${TETROMINOS[type].color}, 0.3)`,
          borderTopColor: `rgba(${TETROMINOS[type].color}, 1)`,
        }
      }
    />
)

export default React.memo(Cell)
