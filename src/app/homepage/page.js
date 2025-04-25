// pages/index.js
import React from 'react';

function HomePage(props) {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <p>This is a simple example.</p>
      <p>{props.message}</p>
    </div>
  );
}

function App() {
    return (
        <HomePage message="This was added as a 'props.message'."></HomePage>    
    )
}

export default App;

// From https://www.google.com/search?client=ubuntu-sn&channel=fs&q=next+simple+react+example
// Then I added the App function and 'props' in HomePage.
