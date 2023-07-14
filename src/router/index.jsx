import { createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home';


/*import Layout from '../Layout/Layout';*/


 export const router = createBrowserRouter([

  /*{
    path: "/",
    element: <Layout />,
    children : [  */
      {
        path: "/",
        element: <Home />,
      },
    /*  {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Contacts",
          element: <Contacts />,
        }, */
    ]
    );
    
export default router