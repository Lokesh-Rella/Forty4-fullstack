// frontend/src/pages/UserList.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserList() {
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        axios.get("https://forty4-fullstack-backend-5.onrender.com/api/users")
            .then(res => setUsers(res.data.data))
            .catch(err => console.error(err));
    };

    const deleteUser = (id) => {
        axios.delete(`https://forty4-fullstack-backend-5.onrender.com/api/users/${id}`)
            .then(() => fetchUsers());
    };

    useEffect(() => { fetchUsers(); }, []);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Users</h2>
            <table className="border-collapse border w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Role</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u, index) => (
                        <tr key={u.id}>
                            <td className="border p-2">{index + 1}</td> {/* S.No resets in UI */}
                            <td className="border p-2">{u.name}</td>
                            <td className="border p-2">{u.email}</td>
                            <td className="border p-2">{u.role}</td>
                            <td className="border p-2">
                                <Link to={`/edit-user/${u.id}`} className="mr-2 text-blue-600">Edit</Link>
                                <button onClick={() => deleteUser(u.id)} className="text-red-600">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
