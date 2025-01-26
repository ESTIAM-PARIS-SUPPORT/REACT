import { useStore } from "./stores/bears"
import { useStoreTasks } from './stores/tasks'
import { useEffect } from "react"

function App() {
  const { bears, increasePopulation } = useStore((state) => state)
  const { loading, data, fetchTasks, error, errorData, success } = useStoreTasks()

  useEffect(() => {
    fetchTasks()
  }, []);

  return (
    <>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p className="text-gray-500 dark:text-gray-400">You have a new message!
            <br /> {bears} around here...
          </p>
          <button onClick={increasePopulation}>one up</button>
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
      </div>
    </>
  )
}

export default App
