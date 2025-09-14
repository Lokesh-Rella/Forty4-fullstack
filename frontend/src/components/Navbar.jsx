import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">User Management</h1>
      <div>
        <Link className="mr-4" to="/">Users</Link>
        <Link to="/add-user">Add User</Link>
      </div>
    </nav>
  );
}
