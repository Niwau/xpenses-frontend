import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { RouterProvider } from 'react-router-dom'
import { Globals } from './styles/Globals.styles'
import { Toast } from './components/Toast/Toast'
import { Main } from './pages/Main/Main'
import { AuthProvider } from './contexts/AuthContext'
import { CardContextProvider } from './contexts/CardContext'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Provider } from 'react-redux'
import { store } from './redux/store'

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
 ]
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <AuthProvider>
    <TransactionsProvider>
      <CardContextProvider>
        <Globals/>
        <RouterProvider router={router}/>
        <Toast/>
      </CardContextProvider>
    </TransactionsProvider>
  </AuthProvider>
  </Provider>
)
