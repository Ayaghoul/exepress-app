import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data); 
      })
      .catch((error) => {
        console.error("Erreur lors de l'appel API :", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>👥 Liste des utilisateurs</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {listOfUser.map((user) => (
          <li
            key={user.id}
            style={{
              backgroundColor: "#f4f4f4",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
            }}
          >
            <strong>{user.name}</strong> <br />
             {user.email} <br />
             {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
