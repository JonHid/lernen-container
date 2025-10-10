import { useRoutes } from 'react-router-dom';
import Menu from './pages/Menu';


function AppRouter() {
  return useRoutes(
    [
      {
        element: <Menu />,
        path: '/',
      },
    ]
  );
}

export default AppRouter;
