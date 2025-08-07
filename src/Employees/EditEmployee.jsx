import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  // GET existing employee details by ID
  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.error("Error fetching employee data:", err);
        alert("Employee not found!");
        navigate("/employees");
      });
  }, [id, navigate]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!employee.name || !employee.email || !employee.department || !employee.salary) {
      alert("Please fill all fields.");
      return;
    }

    EmployeeService.updateEmployee(id, employee)
      .then(() => {
        navigate("/employees");
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "500px", borderRadius: "15px" }}>
        <h2 className="text-center mb-4 text-primary">✏️ Edit Employee</h2>
        <form onSubmit={handleUpdate}>
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

          <button type="submit" className="btn btn-primary w-100">
            💾 Update Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;


