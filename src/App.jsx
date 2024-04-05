// built in useState hook
import { useState } from 'react' 

import './App.css'

const colors = ['pink', 'green', 'blue', 'yellow', 'purple' ];

function App() {
  // state initialisation or state definition, backgroundColor is a state variable, and setBackgroundColor is a state function
  // setBackgroundColor is functionality that comes with useState hook
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };
 
  return (
    // react fragment to return multiple elements in a comp
    <>  
    {/* create a div with classname 'APP' */}
      <div className='App' 
      // set the backgroundcolor to the state variable
        style={{backgroundColor}}> 
        {colors.map((color) => (
          <button type='button' key={color} onClick={onButtonClick(color)} 
          className={backgroundColor === color ? "selected" : ""}>
            
            {color} {/* the button content */}
          </button>
        ))}
      </div>
    </>
  )
}

export default App