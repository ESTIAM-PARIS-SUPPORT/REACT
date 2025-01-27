import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/add-task')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/add-task"!</div>
}
