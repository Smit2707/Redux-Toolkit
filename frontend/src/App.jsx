import axios from '../src/api/AxiosConfig'
import Nav from './components/Nav'
import MainRoute from './routes/MainRoute'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {


  return (
    <div className='h-screen w-full bg-[#111] text-white px-20 py-5'>
      <Nav />
      <MainRoute />
      <ToastContainer theme='dark' autoClose={3000} position='bottom-right' />

    </div>
  )
}

export default App