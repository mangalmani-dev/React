import * as React from 'react'
import { Outlet, createRootRoute, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        Hello "__root"!
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>{" "}
          <Link to="/products" className="[&.active]:font-bold">
            Products
          </Link>{" "}
        </div>
      </div>
      <hr />
      <Outlet />
         <TanStackRouterDevtools/>
    </React.Fragment>
  )
}
