import React from 'react'

// import bgImage from '../../img/bg.png'

export const StyledTetrisWrapper = (props) => (
    <div
        role="button"
        tabIndex="0"
        onKeyDown={ (e) => props.move(e) }
        onKeyUp={ (e) => props.keyUp(e) }
        style={
            {
                width: '100vw',
                height: '100vh',
                // background: `url(${bgImage}) #000`,
                // backgroundSize: 'cover',
                overflow: 'hidden',
            }
        }
    >
        {props.children}
    </div>
)
export const StyledTetris = (props) => (
    <div
        style={
            {
                display: 'flex',
                alignItems: 'flex-staart',
                padding: 40,
                margin: '0 auto',
                maxWidth: 900,
            }
        }
    >
        {props.children}
    </div>
)