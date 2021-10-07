import React, { useState, useEffect } from "react";
import "../app.css";
import { db } from "../firebase";
import Popup from "./Popup";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sale, setSale] = useState("");
  const [message, setMessage] = useState("");
  const [coins, setCoins] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        sale: sale,
        message: message,
        coins: coins,
      })
      .then(() => {
        setLoader(false);
        // alert("Your message has been submitted");
        setModalOpen(true);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
      let coin = sale/100;
      console.log(coin);
    setName("");
    setEmail("");
    setSale("");
    setMessage("");
    setCoins(sale/100);
  };

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
      <h1>Generate loyalty</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Shopping sale</label>
      <input
        placeholder="Enter total sale price"
        value={sale}
        onChange={(e) => setSale(e.target.value)}
        required
      />
      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}

      ></textarea>

      <button
        type="submit"
        className="btn-grad"
        // onClick={() => {
        //   setModalOpen(true);
        // }}
        onClick={() => setCoins(sale/100)}
      >
        Submit
      </button>
      {modalOpen && <Popup setOpenModal={setModalOpen} />}
    </form>
    </div>
    
  );
};

export default Contact;
