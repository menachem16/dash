import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCampaign() {
  const [formData, setFormData] = useState({
    name: '',
    platform: '',
    budget: '',
    status: 'Active',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/campaigns', formData)
      .then(() => navigate('/campaigns'))
      .catch(error => console.error(error));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Campaign
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Campaign Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Platform"
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          type="number"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default AddCampaign;
