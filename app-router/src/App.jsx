import { useEffect, useState } from 'react'
import './App.css'
import { useApi } from './stores/api'

function App() {
  const { messageAPI, fetchMessage } = useApi()

  useEffect(() => {
    fetchMessage()
  }, [])

  return (
    <>
      <div>
        <p>{messageAPI}</p>
      </div>
    </>
  )
}

export default App
