import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const Toast = () => {
  return (
    <ToastContainer
      style={{ fontSize: '1.5rem'}}
      hideProgressBar
    />
  )
}