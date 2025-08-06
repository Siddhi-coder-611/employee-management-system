import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Contact from './components/Contact'; 
import EmployeeList from './employees/EmployeeList';
import AddEmployee from './employees/AddEmployee';
import EditEmployee from './employees/EditEmployee';
import ViewEmployee from './employees/ViewEmployee';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
          <Route path="/view-employee/:id" element={<ViewEmployee />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
