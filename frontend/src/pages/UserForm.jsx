import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserForm() {
  const [user, setUser] = useState({ name: "", email: "", role: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://forty4-fullstack-backend-5.onrender.com/api/users/${id}`)
        .then((res) => setUser(res.data.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`https://forty4-fullstack-backend-5.onrender.com/api/users/${id}`, user);
        alert("✅ User updated successfully!");
      } else {
        await axios.post("https://forty4-fullstack-backend-5.onrender.com/api/users", user);
        alert("✅ User created successfully!");
      }
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 409) {
        alert("⚠️ A user with this email already exists!");
      } else if (err.response) {
        alert(`❌ Error: ${err.response.data.error || "Something went wrong"}`);
      } else {
        alert("❌ Server not reachable. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {id ? "Edit User" : "Add User"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={user.email}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          name="role"
          placeholder="Role"
          value={user.role}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}
