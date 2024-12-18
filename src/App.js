import './App.css'; 
import './../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import'./../node_modules/bootstrap/dist/js/bootstrap.bundle.min' 
import React from 'react'; 
import { Route, Routes }  from 'react-router-dom'; 
import Services from './pages/Services'
import Rea from './pages/Rea'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Mentions from './pages/Mentions'
import Home from './pages/Home'

function App() { 

  return ( 
    <div className="App"> 
            <div>
          <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/services'element={<Services/>}/> 
            <Route path='/blog' element ={<Blog/>}/>
            <Route path='/contact' element ={<Contact/>}/>
            <Route path='/rea' element ={<Rea/>}/>
            <Route path='/mentions' element ={<Mentions/>}/>
          </Routes> 
        </div> 
           
</div> 

); 

} 



export default App; 


 
