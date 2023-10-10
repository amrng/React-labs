import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Notfound from './components/Notfound/Notfound';
import { useContext, useEffect } from 'react';
import { TokenContext } from './context/Token.context';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import Message from './components/Message/Message';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {path:"", element:<Layout/>, children:[
    {index:true, element:<Home/>},
    {path:"register", element:<Register/>},
    {path:"login", element:<Login/>},
    {path:"profile", element:  <ProtectedRoutes><Profile/></ProtectedRoutes> },
    {path:"messages/:userId", element:  <Message/>},

    {path:"*", element:<Notfound/>}
  ]}
])

const queryClient = new QueryClient()


function App() {
  
  let {setToken}= useContext(TokenContext)
  
  useEffect(()=> {
    if (localStorage.getItem("Token")) {
      setToken(localStorage.getItem("Token"))
    }
  },[setToken])



  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
