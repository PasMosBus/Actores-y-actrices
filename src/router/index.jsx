import { createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Layout from '../Layout/Layout';


 export const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path: "/",
        element: <Home />,
      },
      {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Contacts",
          element: <Contacts />,
        },
    ]
    }
   
  ]);
