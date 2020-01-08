import React from 'react'

export const StyledStartButton = (props) => (
    <div
        style={
            {
                boxSizing: 'border-box',
                margin: '0 0 20px 0',
                padding: 20,
                minHeight: 30,
                width: '100%',
                borderRadius: 20,
                border: 'none',
                color: 'white',
                background: '#333',
                fontFamily: 'Pixel, Arial, Helvetica, sans-serif',
                fontSize: '1rem',
                outline: 'none',
                cursor: 'pointer',
            }
        }
        onClick={props.callback}
    >
        {props.children}
    </div>
)