import { useStoreCount } from "../stores/bears"

function Counter() {
  const { bears, increment, decrement, reset } =  useStoreCount()

  return (
    <div className='main'>
       <p>Bears : {bears}</p>
       <p><button onClick={() => increment()}>+1</button></p>
       <p><button onClick={() => decrement()}>-1</button></p>
       <p><button onClick={() => reset()}>reset</button></p>
    </div>
  )
}

export default Counter
