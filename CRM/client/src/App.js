import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://future-fs-02-iota-nine.vercel.app/api/leads';

function App() {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', source: 'Website Form' });

  // Fetch all leads from the database
  const fetchLeads = async () => {
    try {
      const res = await axios.get(API_URL);
      setLeads(res.data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Handle adding a new lead
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, form);
      setForm({ name: '', email: '', source: 'Website Form' });
      fetchLeads();
    } catch (err) {
      alert("Failed to add lead. Email might already exist.");
    }
  };

  // Handle status update dropdown change
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`${API_URL}/${id}`, { status: newStatus });
      fetchLeads();
    } catch (err) {
      console.error(err);
    }
  };

  // Handle deleting a lead record
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchLeads();
      } catch (err) {
        console.error("Error deleting lead", err);
      }
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Client Lead Management System</h1>
      
      {/* Simulation Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Name" 
          value={form.name} 
          onChange={e => setForm({...form, name: e.target.value})} 
          required 
          style={{ marginRight: '10px', padding: '5px' }} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={form.email} 
          onChange={e => setForm({...form, email: e.target.value})} 
          required 
          style={{ marginRight: '10px', padding: '5px' }} 
        />
        <button type="submit" style={{ padding: '5px 10px', cursor: 'pointer' }}>Simulate Lead Submission</button>
      </form>

      {/* Leads Management Dashboard Table */}
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Name</th>
            <th>Email</th>
            <th>Source</th>
            <th>Status</th>
            <th>Update Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead._id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.source}</td>
              <td><strong>{lead.status}</strong></td>
              <td>
                <select value={lead.status} onChange={(e) => handleStatusChange(lead._id, e.target.value)}>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Converted">Converted</option>
                  <option value="Lost">Lost</option>
                </select>
              </td>
              <td>
                <button 
                  onClick={() => handleDelete(lead._id)} 
                  style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
