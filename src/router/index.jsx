import { createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home';
import CreateCharacters from '../components/CreateCharacters';
import EditCharacters from '../components/EditCharacters';
export const router = createBrowserRouter([

  
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/create",
        element: <CreateCharacters/>
      },
      {
        path: "/edit/",
        element: <EditCharacters/>
      },
   
  ]);

 export default router
