import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Prouduct/$pid')({
  component: RouteComponent,
})

function RouteComponent() {

    const {pid}=Route.useParams()
  return <div>Hello "/Prouduct/$pid"!
    <h2>this is my products id:{pid}</h2>
  </div>
}
