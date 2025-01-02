import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';

// Create a Material-UI theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

// Import Pages
import Home from './pages/Home';
import Campaigns from './pages/Campaigns';
import AddCampaign from './pages/AddCampaign';
import NotFound from './pages/NotFound';

// Main App Component
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/add-campaign" element={<AddCampaign />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));
