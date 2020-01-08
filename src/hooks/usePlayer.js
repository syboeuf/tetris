import { useState, useCallback } from 'react'

import { TETROMINOS, randomTetromino } from '../tetrominos'
import { STAGE_WIDTH, checkCollision } from '../gameHelpers'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collided: false,
    })
    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer((prev) => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
            collided,
        }))
    }

    const rotate = (matrix, dir) => {
        // Make the rows to become cols (transponse)
        const rotateTetro = matrix.map((_, index) => 
            matrix.map((col) => col[index])
        )
        // Reverse each row to get a rotated matrix
        if (dir > 0) {
            return rotateTetro.map((row) => row.reverse())
        }
        return rotateTetro.reverse()
    }

    const playerRotate = (stage, dir) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player))
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir)
        const pos = clonedPlayer.pos.x
        let offset = 1
        while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
            clonedPlayer.pos.x += offset
            offset = -(offset + (offset > 0 ? 1 : -1))
            if (offset > clonedPlayer.tetromino[0].length) {
                rotate(clonedPlayer.tetromino, -dir)
                clonedPlayer.pos.x = pos
                return
            }
        }
        setPlayer(clonedPlayer)
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false,
        })
    })
    return [player, updatePlayerPos, resetPlayer, playerRotate]
}
