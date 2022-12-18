import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { RouterProvider } from 'react-router-dom'
import { Globals } from './styles/Globals.styles'
import { Toast } from './components/Toast/Toast'
import { Signin } from './pages/Signin'
import { Main } from './pages/Main/Main'
import { AuthProvider } from './contexts/AuthContext'
import { CardContextProvider } from './contexts/CardContext'

const router = createBrowserRouter(
 [
  {
    path: '/',
    element: <Main/>
  },
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
  <AuthProvider>
    <CardContextProvider>
      <Globals/>
      <RouterProvider router={router}/>
      <Toast/>
    </CardContextProvider>
  </AuthProvider>
)
