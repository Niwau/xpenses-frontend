import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoutesFromElements, Route } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { RouterProvider } from 'react-router-dom'
import { Globals } from './styles/Globals.styles'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/signup' element={<Signup/>}/>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Globals/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
