import { useState } from 'react'
import Box from './Box';
import { ThemeContext } from './ThemeContext';

function LearnContext() {
   return( <ThemeContext>
        <button onClick={() => setDarkTheme(!darkTheme)} className='bg-gray-700 text-white px-4 py-2'>ToggleTheme</button>
        <div className="p-6" style={ThemeStyle(darkTheme)}>Hello Demo div</div>
        <Box />
    </ThemeContext>
  )
}

export default LearnContext