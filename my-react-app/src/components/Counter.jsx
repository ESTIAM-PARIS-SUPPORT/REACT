import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
        <p>Counter : {count}</p>
        <p><button onClick={() => setCount(count +1)}>+1</button></p>
        <p><button onClick={() => setCount(count -1)}>-1</button></p>
    </div>
  )
}

export default Counter
