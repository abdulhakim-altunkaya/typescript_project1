import React from 'react';

function App() {
  const myName:string = "Abdulhakim";
  const myAge:number = 36;
  const amIDeveloper:boolean = true;
  return (
    <div className="App">
      <p>Hello Typescript</p>
      <p>My name is {myName}, I am {myAge} years old and I am a developer: {amIDeveloper}</p>
    </div>
  );
}

export default App;
