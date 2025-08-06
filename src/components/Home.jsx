import React from "react";
import "./Home.css"; // We'll style separately

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">Employee Management System</span></h1>
          <p>Manage and streamline your company's employees with ease and efficiency.</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
            alt="Teamwork"
            className="hero-img"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2><b>Key Features</b></h2>
        <div className="feature-cards">
          <div className="card">
            <h3><b>📋 Add Employees</b></h3>
            <p>Quickly onboard new employees using our simple form.</p>
          </div>
          <div className="card">
            <h3 ><b>👁️ View All Employees</b></h3>
            <p>Browse and search employee records anytime.</p>
          </div>
          <div className="card">
            <h3><b>🛠️ Edit & Manage</b></h3>
            <p>Edit employee details and keep your data updated in real-time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}

export default Home;

/*function Home() {
  return (
    <div className="text-center">
      <h2>Welcome to Employee Management System</h2>
      <p>Manage your company's employees easily.</p>
    </div>
  );
}

export default Home;*/
