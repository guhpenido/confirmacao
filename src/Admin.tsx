// src/Admin.tsx
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhRhWIiU7fWyQuVioN4xj4RfKSKvo3OJo",
  authDomain: "presenca-1399f.firebaseapp.com",
  projectId: "presenca-1399f",
  storageBucket: "presenca-1399f.appspot.com",
  messagingSenderId: "416958968897",
  appId: "1:416958968897:web:8c429416d087125e7f82c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Admin = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "confirmacao"));
      const data = querySnapshot.docs.flatMap(doc => {
        const confirmation = doc.data();
        return [confirmation.nome1, confirmation.nome2, confirmation.nome3, confirmation.nome4, confirmation.nome5].filter(Boolean);
      });
      setNames(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Confirmados</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total de nomes confirmados: {names.length}</p>
    </div>
  );
};

export default Admin;
