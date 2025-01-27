import { useEffect } from "react";
import { useStoreTasks } from "../stores/tasks"
import { Link } from "@tanstack/react-router";

function Tasks() {
  const { loading, data, fetchTasks, error } = useStoreTasks()

  useEffect(() => {
    fetchTasks()
  }, []);

  return (
    <>
      {loading ? <p>loading ...</p> : (
        error ? <p>Error : {errorData}</p> : (
          <ul>
            {data?.map(({ title, id, completed }) => (
              <li key={id}>
                <Link to={`/task/${id}`} >{title}</Link>
              </li>
            ))}
          </ul>
        )
      )}
    </>)
}

export default Tasks
