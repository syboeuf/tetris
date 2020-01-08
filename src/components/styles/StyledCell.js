import React from 'react'

export const StyledCell = (props) => (
    <div
      style={
      {
        width: 'auto',
        background: `rgba(${props.color}, 0.8)`,
        border: `${props.type === 0 ? '0px solid' : '4px solid'}`,
        borderBottomColor: `rgba(${props.color}, 0.1)`,
        borderRightColor: `rgba(${props.color}, 1)`,
        borderLeftColor: `rgba(${props.color}, 0.3)`,
        borderTopColor: `rgba(${props.color}, 1)`,
      }
    }
    >
        {props.children}
    </div>
)
