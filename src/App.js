import { RouterProvider } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import './App.css';
import { Toaster } from 'react-hot-toast';
import router from './Routes/router';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}/>
      <Toaster/>
    </div>
  );
}

export default App;
