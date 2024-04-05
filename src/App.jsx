// built in useState hook
import { useState } from 'react' 

import './App.css'

const colors = ['pink', 'green', 'blue', 'yellow', 'purple' ];

function App() {
  // state initialisation or state definition, backgroundColor is a state variable, and setBackgroundColor is a state function
  // setBackgroundColor is functionality that comes with useState hook
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const [changeCounter, incrementCounter] = useState(0); // initial value of stateVariable



  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    incrementCounter(changeCounter + 1);
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
        {/* display counter */}
        <div className='counter'>
          Change counter: {changeCounter}
        </div>
      </div>
    </>
  )
}

export default App