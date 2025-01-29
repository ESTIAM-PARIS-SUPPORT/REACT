import { createFileRoute } from '@tanstack/react-router'
import User from '../components/User'

export const Route = createFileRoute('/user/$userId')({
  component: User,
})

