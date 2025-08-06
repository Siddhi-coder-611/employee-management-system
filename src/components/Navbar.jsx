import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">EMS</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/employees">Employees</Link>
        <Link className="nav-link" to="/add-employee">Add Employee</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link> {/* ✅ New Contact Link */}
      </div>
    </nav>
  );
}

export default Navbar;
