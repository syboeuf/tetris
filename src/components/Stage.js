import React from 'react'

import Cell from './Cell'

const Stage = ({ stage }) => (
    <div
        className='stage'
        style={
            {
                gridTemplateRows: `repeat(
                    ${stage.length},
                    calc(25vw / ${stage[0].length})
                )`,
                gridTemplateColumns: `repeat(${stage[0].length}, 1fr)`,
            }
        }
    >
        {
            stage.map((row) =>
                row.map((cell, index) =>
                    <Cell key={index} type={cell[0]} />
                )
            )
        }
    </div>
)

export default Stage