import { createBrowserRouter, Outlet } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header.jsx'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div className="app">
      <Header/>
      <div className="outlet">
        <Outlet/>
      </div>
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
        path : '/projects',
        element : <Projects/>,
      },
      {
        path : '/contact',
        element : <Contact/>,
      },
    ]
  }
])
export default App
