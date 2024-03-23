import { useContext } from 'react'
// import { ThemeContex } from "./LearnContext"
import { ThemeContext, useTheme, ThemeStyle } from './ThemeContext';

export default function Box() {
    const theme = useTheme()
    return (
        <div className='p-6 my-2' style={ThemeStyle(theme)}>Demo</div>
    )
}
