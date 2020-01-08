import React from 'react'

export const StyledDisplay = (props) => (
    <div
        style={
            {
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                margin: '0 0 20px 0',
                padding: 20,
                border: '4px solid #333',
                minHeight: 30,
                width: '100%',
                borderRadius: 20,
                color: (props.gameOver) ? 'red' : '#999',
                background: '#000',
                fontFamily: 'Pixel,Arial, Helvetica, sans-serif',
                fontSize: '0.8rem',
            }
        }
    >
        {props.children}
    </div>
)
