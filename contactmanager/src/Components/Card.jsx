import React from 'react';

export const Card = ({ listOfContacts, onDelete }) => {

    const handleDelete = (name) => {
        onDelete(name);
    }

    return(
        <>
        <h1  style={{marginLeft:"300px"}}>Contact List:</h1>
        {listOfContacts.map(contact => {
            return(
                <ul key={contact.name}>
                     <li class="list-group-item">
                     <div style={{display: "flex",justifyContent:"space-around"}}>
                               <h3> -  {contact.name} </h3>
                     <button onClick={() => handleDelete(contact.name)}  type="button" class="btn btn-outline-danger">
                      <i class="glyphicon glyphicon-remove"></i>
                       </button>
                     </div>
                     </li>
                </ul>
            )
        })}
        </>
    )
}