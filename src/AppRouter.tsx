import { useRoutes } from 'react-router-dom';
import Menu from './pages/Menu';
import Quiz from 'lernen-quiz/Quiz'


function AppRouter() {
  return useRoutes(
    [
      {
        element: <Menu />,
        path: '/',
      },
      {
        element: <Quiz />,
        path: '/quiz',
      },
    ]
  );
}

export default AppRouter;
