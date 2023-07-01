
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
  const [contacts,setContacts]=useState([])

  const formSub=(data)=>{
    //  console.log(data);
     setContacts([...contacts,data])
  }
  console.log(contacts,'contact');

  return (
    <BrowserRouter>
      <Navbar/>
    
     <Routes>
      <Route path='/' element={<Home formSub={formSub} contacts={contacts}/>}></Route>
      <Route path='/favourite' element={<Favourites/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
     </Routes>
    
    </BrowserRouter>
  );
}

export default App;
