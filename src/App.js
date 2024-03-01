
import './App.css';

import React from 'react';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data); 
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>


        <div className="form">

          <h1>Form Details</h1>

          <label>First Name</label>
          <input type="text" id="fname" name="fname" required /><br />

          <label>Last Name</label>
          <input type="text" id="lname" name="lname" required /><br />

          <label>Email</label>
          <input type="email" id="email" name="email" required /><br />

          <label>NIC Number (12 digits)</label>
          <input type="text" id="nic" name="nic" pattern="[0-9]{12}" title="NIC must be 12 dig" required /><br />

          <label>Address</label>
          <input type="text" id="address" name="address" required /><br />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
