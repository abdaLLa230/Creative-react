import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Chapters from './Components/Chapters/Chapters'
import CreativeThinking from './Components/CreativeThinking/CreativeThinking'
import Feedback from './Components/Feedback/Feedback'
import Notfound from './Components/Notfound/Notfound'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MindMaps from './Components/MindMaps/MindMaps'




let x = createBrowserRouter([
  {path:"" , element : <Layout/> ,
  children : [
    { index : true  , element : <Home/>},
    {path:"Chapter" , element : <Chapters/>},
    {path:"Creative", element : <CreativeThinking/>},
    {path:"Feed"    , element : <Feedback/>},
    {path:"Mindmap" , element : <MindMaps/>},
    {path:"*"       , element : <Notfound/>},

  
  ]}
  
])

let query = new QueryClient()


function App() {

  return (
    <>
       <QueryClientProvider client={query}>
        <RouterProvider  router={x}></RouterProvider>

        </QueryClientProvider>   
    </>
  )
}

export default App
