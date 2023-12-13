import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import "animate.css/animate.compat.css"



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  
)
