import React from 'react'
import Contact from '../Components/Contact';


function Favourites({contacts,deleteContact,favToggle}) {
  return (
    <>
    
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
    {contacts.map((cont) => {
      console.log(cont,'from fav');
        return (
          cont.fav &&(
          <Contact 
            key={cont.id}
            contacts={[cont]}
            deleteContact={deleteContact}
            favToggle={favToggle}
          />
          )
        );
      })}
      {contacts.filter((contac)=> contac.fav ).length ===0 && <div>No favourite contacts</div>}
      </div>
    </div>
  </>
  )
}

export default Favourites