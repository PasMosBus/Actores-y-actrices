import { createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home';
import CreateCharacters from '../components/CreateCharacters';
import EditCharacters from '../components/EditCharacters';
import DeliteCharacters from '../components/DeliteCharacters';
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
        path: "/edit/:id",
        element: <EditCharacters/>
      },
      {
        path: "/delite/:id",
        element: <DeliteCharacters/>
      },
   
  ]);

 export default router
