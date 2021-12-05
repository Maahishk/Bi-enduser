import { FC } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

type PublicRouteProps = {
  component: FC
} & RouteProps

function renderComponent(props: any, Component: FC, isLoggedIn: boolean) {
  return isLoggedIn ? <Redirect to="/home" /> : <Component {...props} />
}

const PublicRoute: FC<PublicRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const isLoggedIn = false
  return (
    <Route
      {...rest}
      render={(props) => renderComponent(props, Component, isLoggedIn)}
    />
  )
}

export default PublicRoute
