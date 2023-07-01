import React from "react";

function Contact({ contacts }) {
  console.log(contacts, "from contcats");
  return (
    <>
      {contacts.map((cont) => {
        return (
          <div className="col" key={cont.id}>
            <div className="card shadow-sm w-100">
              <div className="card-header">
                <div className="row">
                  <div className="col-6 ">{cont.name}</div>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{cont.phone} </li>
                <li className="list-group-item">{cont.email}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Contact;
