import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employee.name || !employee.email || !employee.department || !employee.salary) {
      alert("Please fill all fields.");
      return;
    }

    EmployeeService.createEmployee(employee)
      .then(() => {
        navigate("/employees");
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "500px", borderRadius: "15px" }}>
        <h2 className="text-center mb-4 text-success">➕ Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter employee name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter employee email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter department"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter salary"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            ➕ Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;