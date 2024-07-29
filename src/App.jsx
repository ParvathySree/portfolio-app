import { createBrowserRouter, Outlet } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header.jsx'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div className="app">
      
      {/* <div className="outlet"> */}
        <About/>
        {/* <Skills/> */}
    </div>

  )
}


export const AppRouter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <About/>,
      },
      {
  
      },
      {
  
      }
    ]
  }
])
export default App
