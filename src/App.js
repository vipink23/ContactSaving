import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [contacts,setContacts]=useState([])
  console.log(contacts,'favcont?');

  useEffect(()=>{
   
   const getContact= async()=>{
       const contactFromServer= await fetchContact()
       setContacts(contactFromServer)
   }
   getContact()

  },[])




  const formSub= async(data)=>{
    try {
      const response = await fetch("http://localhost:3004/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      setContacts([...contacts,result])
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }     
  }
 console.log(contacts);

 const deleteContact= async(id)=>{
     
      try {
         const response = await fetch(`http://localhost:3004/contacts/${id}`,{
          method:"DELETE"
         })
         if(response.ok){
          const newContact=contacts.filter((contact)=>{
            return contact.id !== id
       })
       setContacts(newContact)
         }
      } catch (error) {
        console.log(error);
        
      }
 }



 const getCont=async(id)=>{
  try {
    const res= await fetch(`http://localhost:3004/contacts/${id}`)
    const result=res.json()
    return result
  } catch (error) {
    console.log(error);
  }
 }
 

 const favToggle=async(id)=>{
  console.log(id,'from toggle');

   const singleCont=await getCont(id)
   console.log(singleCont,'singlessss');

   const updateFav={...singleCont, fav:!singleCont.fav}
   console.log(updateFav,'updateee');


   const update= await fetch(`http://localhost:3004/contacts/${id}`,{
    method:'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateFav),
   })

   if(update.ok){
    const favContacts=contacts.map((contact)=>{
      return contact.id === id
      ? {...contact , fav:!contact.fav}:contact
    })
    console.log(favContacts,'favvs');
    setContacts(favContacts)
    console.log(favContacts,'favvvvvvvvsss');
   }




  

  
    
 }

 const fetchContact=async()=>{
  try{
    const response = await fetch("http://localhost:3004/contacts")
    if(response.ok ){
      const Allcontact=response.json()
      return Allcontact
    }
  }catch(error){
    console.log(error);
  }
 }




  return (
    <BrowserRouter>
      <Navbar/>
    
     <Routes>
      <Route path='/' element={<Home formSub={formSub} contacts={contacts} deleteContact={deleteContact} favToggle={favToggle} /> }></Route>
      <Route path='/favourite' element={<Favourites contacts={contacts} deleteContact={deleteContact} favToggle={favToggle}/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
     </Routes>
    
    </BrowserRouter>
  );
}

export default App;
