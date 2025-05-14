
import './App.css'
import AppList from './components/AppList'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Myproductdata from './data/Myproductdata.json'
function App() {
  

  return (
    <>
      <div>
       <  AppList/>
       < HomePage/>
       < Navbar/>
       < Sidebar/>

       <li> < Myproductdata/> </li>
      </div>
      <p className="read-the-docs">
      
      </p>
    </>
  )
}

export default App
