import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get('/api/campaigns')
      .then(response => setCampaigns(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Campaigns
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/add-campaign" style={{ marginBottom: '16px' }}>
        Add New Campaign
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Platform</TableCell>
            <TableCell>Budget</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map(campaign => (
            <TableRow key={campaign._id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.platform}</TableCell>
              <TableCell>{campaign.budget}</TableCell>
              <TableCell>{campaign.status}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" size="small">
                  Edit
                </Button>
                <Button variant="contained" color="secondary" size="small" style={{ marginLeft: '8px' }}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default Campaigns;
