import Counter from './components/Counter'

import { useEffect } from 'react'
import { useStoreTasks } from './stores/tasks';

function App() {
  const { loading, data, fetchTasks, error, errorData, success } = useStoreTasks()

  useEffect(() => {
    fetchTasks()
  }, []);

  return (
    <div className='main'>
      <Counter />
      {loading ? <p>loading ...</p> : (
        error ? <p>Error : {errorData}</p> : (
          <ul>
            {data?.map(({ title, id, description, completed }) => (
              <li key={id}>{id} - {title} status {completed ? 'yes' : 'no'}
                <br /> {description}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  )
}

export default App
