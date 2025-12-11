// Importing the necessary modules 
import { Fragment, useState } from 'react';

// Creating the App component 
const App = () => {
  // Setting the state 
  const [loggedIn, setIsLoggedIn] = useState(false);

  // Rendering the jsx component 
  return(
    <Fragment> 
      <p> App Component </p>
    </Fragment>
  )
}

// Exporting the app componnet 
export default App; 
