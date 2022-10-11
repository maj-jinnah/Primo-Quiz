import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import About from './components/About/About'
import Main from './Layout/Main';
import Errorpage from './components/Errorpage/Errorpage';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
        path: '/about',
        element: <About></About>
        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        }
      ]
    },
    {
      path: '*',
      element: <Errorpage></Errorpage>
    }
  ])

  return (
    <div className="App">
        <RouterProvider router= {router}></RouterProvider>
    </div>
  );
}

export default App;
