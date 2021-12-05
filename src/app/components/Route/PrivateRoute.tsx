import { selectAuthToken } from 'app/slice/selectors'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import SideBar from 'app/components/SideBar'

type PrivateRouteProps = {
  component: FC
  authToken?: string
} & RouteProps

function component(Component: FC, props: any) {
  return (
    <>
      <SideBar></SideBar>
      <Component {...props}></Component>
    </>
  )
}

function renderComponent(props: any, Component: FC, isLoggedIn: boolean) {
  const { location, ...rest } = props
  return isLoggedIn ? (
    component(Component, rest)
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { form: location },
      }}
    />
  )
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  render,
  ...rest
}) => {
  const authToken = useSelector(selectAuthToken)
  const isLoggedIn = true
  return (
    <Route
      {...rest}
      render={(props) => renderComponent(props, Component, isLoggedIn)}
    />
  )
}

export default PrivateRoute
