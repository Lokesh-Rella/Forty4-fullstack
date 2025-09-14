// frontend/src/pages/UserForm.js
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserForm() {
  const [user, setUser] = useState({ name: "", email: "", role: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/users/${id}`)
        .then(res => setUser(res.data.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:8080/api/users/${id}`, user)
        .then(() => navigate("/"));
    } else {
      axios.post("http://localhost:8080/api/users", user)
        .then(() => navigate("/"));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{id ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" value={user.name} onChange={handleChange} className="border p-2 w-full" />
        <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="border p-2 w-full" />
        <input name="role" placeholder="Role" value={user.role} onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}
