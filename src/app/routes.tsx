import { Login } from '@/pages/login'
import { useRoutes } from 'react-router-dom'
import { PublicRoute } from './PublicRoute'
import ErrorPage from './ErrorPage'
import { PrivateRoute } from './PrivateRoute'
import Home from '@/pages/home'



export const AppRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <PublicRoute/>,
      children: [
        { path: 'login', element: <Login/> },
        
      ],
    },
    {
      path: '/',
      element: <PrivateRoute/>,
      children: [
        {index:true, element: <Home/>},
        { path: 'home', element: <Home/> },
        
      ],
    },
    
    { path: '*', element: <ErrorPage /> },
  ])
}
