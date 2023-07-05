import React from 'react'
import Form from '../Components/Form'
import Contact from '../Components/Contact'


function Home({formSub ,contacts,deleteContact,favToggle}) {
  
  return (
    <div className='container my-5'> 
    <div className='row justify-content-sm-center my-5'>
        <Form formSub={formSub}/>
        </div>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5'>
        <Contact contacts={contacts} deleteContact={deleteContact} favToggle={favToggle}/>
        {contacts.length ===0 && <div>No contacts added</div>}
      
    </div>
    </div>
  )
}

export default Home