import {} from 'react'
import useLocalStorage from './useLocalStorage'

export default function useDarkMode (enabled) {
    const [value, setValue] = useLocalStorage(enabled)

    return[value, setValue]
}