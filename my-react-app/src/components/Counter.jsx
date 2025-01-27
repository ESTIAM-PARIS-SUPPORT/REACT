import { useStoreCount } from "../stores/bears"

function Counter() {
  const { bears } =  useStoreCount()

  return (
    <div className='main'>
       <p>Bears : {bears}</p>
    </div>
  )
}

export default Counter
