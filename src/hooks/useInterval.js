import { useEffect, useRef } from 'react'

export const useInterval = (callback, delay) => {
    const saveCallback = useRef()
    // Remember the latest callback
    useEffect(() => {
        saveCallback.current = callback
    }, [callback])

    // Set up the interval
    useEffect(() => {
        const tick = () => {
            saveCallback.current()
        }
        if (delay !== null) {
            const id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}