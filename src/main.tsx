import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { RouterProvider } from 'react-router-dom'
import { Globals } from './styles/Globals.styles'
import { Toast } from './components/Toast/Toast'
import { Signin } from './pages/Signin'

const router = createBrowserRouter(
 [
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/signin',
    element: <Signin/>
  }
 ]
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Globals/>
    <RouterProvider router={router}/>
    <Toast/>
  </React.StrictMode>,
)
