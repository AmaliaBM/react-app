
import './App.css'
import AppList from './components/AppList'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Myproductdata from './data/Myproductdata.json'
import List from './components/List'
import ListItem from './components/ListItem'
function App() {
  

  return (
    <>
      <div>
       <  AppList/>
       < HomePage/>
       < Navbar/>
       < Sidebar/>
       < List />
       <ListItem />

       <li> < Myproductdata/> </li>
      </div>
      <p className="read-the-docs">
      
      </p>
    </>
  )
}

export default App
