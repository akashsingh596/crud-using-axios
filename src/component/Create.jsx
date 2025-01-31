import React, { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../Features/userDetails";
import { useNavigate, useParams } from "react-router-dom";

export default function Create() {
  //   const [users, setUsers] = useState({});
  const [userss, setUserss] = useState({ name: "", email: "", age: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const allUsers = useSelector((state) => state.app.users);

  useEffect(() => {
    if (id) {
      const userToEdit = allUsers.find((user) => user.id === id);
      if (userToEdit) {
        setUserss(userToEdit);
      }
    }
  }, [id, allUsers]);

  const getUserData = (e) => {
    setUserss({ ...userss, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if (id) {
      dispatch(updateUser({ id, ...users }));
    } else {
      dispatch(createUser(users));
    }
    navigate("/read");
  };

  return (
    <div>
      <h2 className="text-center mt-5">{id ? "Edit User" : "Create User"}</h2>
      <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            onChange={getUserData}
            type="text"
            className="form-control"
            placeholder="Enter name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            onChange={getUserData}
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            onChange={getUserData}
            type="text"
            className="form-control"
            name="age"
            placeholder="Age"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={getUserData}
            className="form-check-input"
            name="gender"
            type="radio"
            value="Male"
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            onChange={getUserData}
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
          />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}
