import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, ShowUser } from "../Features/userDetails";
import "./Read.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function Read() {
  const dispatch = useDispatch();
  const { users, loading , error} = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(ShowUser());
  }, []);

  if (loading) {
    return <h1 className="Display">Loading...</h1>;
  }

  if (error) {
    return <h1 className="Display">Error: {error}</h1>;
  }

  return (
    <>
      {showModal && (
        <Modal id={id} showModal={showModal} setShowModal={setShowModal} />
      )}
      <h2 className="mx-auto w-50">ALL DATA</h2>
      <div>
        {users &&
          users.map((userData) => (
            <div
              key={userData.id}
              className="card w-50 mx-auto"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">{userData.name}</h5>
                <p className="card-text">{userData.email}</p>
                <p className="card-text">{userData.gender}</p>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => {
                      [setId(userData.id), setShowModal(true)];
                    }}
                    className="btn btn-primary"
                  >
                    View
                  </button>
                  <Link to={`/edit/${userData.id}`} className="btn btn-primary">
                    Edit
                  </Link>

                  <Link
                    className="btn btn-primary"
                    onClick={() => dispatch(deleteUser(userData.id))}
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
