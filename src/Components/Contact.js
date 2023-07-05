import React from "react";

function Contact({ contacts, deleteContact,favToggle }) {
  return (
    <>
      {contacts.map((cont) => {
        return (
          <div className="col" key={cont.id}>
            <div className="card shadow-sm w-100">
              <div className="card-header">
                <div className="row">
                  <div className="col-6 ">{cont.name}</div>
                  <div onClick={()=>{favToggle(cont.id)}} className="col-2 offset-4">
                    <i  className={cont.fav ? "fas fa-star  text-warning": "far fa-star text-warning"}></i>
                  </div>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{cont.phone} </li>
                <li className="list-group-item">{cont.email}</li>
                <li className="list-group-item">
                  <button
                    onClick={() => {
                      deleteContact(cont.id);
                    }}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Contact;
