import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
 import Contact from './components/contact.jsx'
 import Github,{githubInfoLoader} from './components/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<App/>,
//     children:[
//       {
//        path:"" ,
//        element:<Home/>
//       },{
//         path:"About",
//         element:<About/>
//       },
//       {
//         path:"Contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        loader={githubInfoLoader}
        path="Github"
        element={<Github />}
      />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
