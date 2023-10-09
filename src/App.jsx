import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Notfound from './components/Notfound/Notfound';

const router = createBrowserRouter([
  {path:"", element:<Layout/>, children:[
    {path:"register", element:<Register/>},
    {path:"login", element:<Login/>},
    {path:"profile", element:<Profile/>},

    {path:"*", element:<Notfound/>}
  ]}
])
function App() {
  return (
    <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
  );
}

export default App;
