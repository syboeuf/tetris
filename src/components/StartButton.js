import React from 'react'
import { StyledStartButton } from './styles/StyledStartButton'

const StartButton = ({ callback }) => (
    <StyledStartButton callback={callback}>Start Game</StyledStartButton>
)

export default StartButton
