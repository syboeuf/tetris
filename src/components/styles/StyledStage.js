import React from 'react'

export const StyledStage = (props) => (
    <div
        style={
            {
                display: 'grid',
                gridTemplateRows: `repeat(
                    ${props.height},
                    calc(25vw / ${props.width})
                )`,
                gridTemplateColumns: `repeat(${props.width}, 1fr)`,
                gridGap: 1,
                border: '2px solid #333',
                width: '100%',
                maxWidth: '25vw',
                background: '#111',
            }
        }
    >
        {props.children}
    </div>
)