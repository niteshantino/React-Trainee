import React, { useState } from "react";
import Form from "./Components/Form";
import Display from "./Components/Display";
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  const [formData, setFormData] = useState({});

  return (
    <div className="App">
      <div className="form">
        <Routes>
          <Route path="/" element={<Form setFormData={setFormData} />} />
          <Route exact path="/display" element={<Display formData={formData} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
