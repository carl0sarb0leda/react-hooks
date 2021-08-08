// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting( {initialName = ''} ) { //Do not forget to initialize the prop in case is not passed a value
  // 💣 delete this variable declaration and replace it with a React.useState call
  // const name = ''
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    let input = event.target.value
    setName(input ? input : null)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Charlie Brown"/>
}

export default App
