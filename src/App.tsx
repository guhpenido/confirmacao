import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import penido from "./assets/penido_png.png";
import faz from "./assets/penido_faz.png";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

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

function App() {
  const [count, setCount] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [formData, setFormData] = useState({
    nome1: "",
    nome2: "",
    nome3: "",
    nome4: "",
    nome5: "",
  });
  const navigate = useNavigate();

  const handleShowMore = (event) => {
    event.preventDefault();
    setShowMore(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.nome1.trim() === "") {
      alert("O campo Nome não pode estar vazio.");
      return;
    }
    try {
      await addDoc(collection(db, "confirmacao"), formData);
      navigate("/sucesso");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div>
        <a href="#">
          <img src={penido} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div>
        <a href="#">
          <img src={faz} className="logoa" alt="Vite logo" />
        </a>
      </div>
      <h2>
        📅 19/07/2024 🕢 19h{" "}
        <a
          href="https://www.google.com.br/maps/place/Fil%C3%A9/@-19.8716175,-43.9897098,17z/data=!3m1!4b1!4m6!3m5!1s0xa6911bfaf63b41:0x6b030d737dbcfb47!8m2!3d-19.8716226!4d-43.9871349!16s%2Fg%2F11b_1rgr44?entry=ttu"
          target="_blank"
        >
          📌 Av. Fleming, 271 - Ouro Preto, BH (Filé)
        </a>
      </h2>
      <h1>Confirmação de presença</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome1">Nome: </label>
          <input
            type="text"
            name="nome1"
            id="nome1"
            value={formData.nome1}
            onChange={handleChange}
            className="nome"
          />
          <br />
          <button id="maispessoas" onClick={handleShowMore}>
            Adicionar mais pessoas 🔽
          </button>
          <br />
          <br />
          <div className={`maisnomes ${showMore ? "show" : ""}`}>
            <label htmlFor="nome2">#2 Nome: </label>
            <input
              type="text"
              name="nome2"
              id="nome2"
              value={formData.nome2}
              onChange={handleChange}
              className="nome"
            />
            <br />
            <label htmlFor="nome3">#3 Nome: </label>
            <input
              type="text"
              name="nome3"
              id="nome3"
              value={formData.nome3}
              onChange={handleChange}
              className="nome"
            />
            <br />
            <label htmlFor="nome4">#4 Nome: </label>
            <input
              type="text"
              name="nome4"
              id="nome4"
              value={formData.nome4}
              onChange={handleChange}
              className="nome"
            />
            <br />
            <label htmlFor="nome5">#5 Nome: </label>
            <input
              type="text"
              name="nome5"
              id="nome5"
              value={formData.nome5}
              onChange={handleChange}
              className="nome"
            />
            <br />
            <br />
          </div>
          <button type="submit" id="confirmarPresenca">
            Confirmar presença!
          </button>
        </form>
        <p>Confirme presença até dia 15/07/2024.</p>
      </div>
    </>
  );
}

export default App;
