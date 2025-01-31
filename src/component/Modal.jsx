import React from "react";
import { useSelector } from "react-redux";
import "./Modal.css";

export default function Modal({ id, showModal, setShowModal }) {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.find((user) => user.id === id);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setShowModal(false)}>Close</button>
        <h2>{singleUser.name}</h2>
        <h2>{singleUser.email}</h2>
        <h2>{singleUser.age}</h2>
      </div>
    </div>
  );
}
