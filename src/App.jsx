import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-2'>
      <div>test</div>
      <div>test</div>
      <div>test
        <FontAwesomeIcon icon={faArrowLeft}/>
      </div>
    </div>
  )
}

export default App
