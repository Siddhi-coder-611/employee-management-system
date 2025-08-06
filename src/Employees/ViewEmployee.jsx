import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function ViewEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.error("Error fetching employee:", err);
        alert("Employee not found!");
        navigate("/employees");
      });
  }, [id, navigate]);

  if (!employee) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Loading Employee Details...</p>
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "500px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4 text-success">👤 Employee Details</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Name:</strong> {employee.name}
          </li>
          <li className="list-group-item">
            <strong>Email:</strong> {employee.email}
          </li>
          <li className="list-group-item">
            <strong>Department:</strong> {employee.department}
          </li>
          <li className="list-group-item">
            <strong>Salary:</strong> ₹ {employee.salary}
          </li>
        </ul>

        <button
          className="btn btn-secondary w-100 mt-4"
          onClick={() => navigate("/employees")}
        >
          🔙 Back to List
        </button>
      </div>
    </div>
  );
}

export default ViewEmployee;

/*function ViewEmployee() {
  return (
    <div>
      <h2>Employee Profile</h2>
      <p>Details of selected employee.</p>
    </div>
  );
}

export default ViewEmployee;
*/