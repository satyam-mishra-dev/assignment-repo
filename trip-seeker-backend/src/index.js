import express from 'express';
import cors from 'cors';
import { supabase } from './lib/supabase.js';

const app = express();
const PORT = 5001;

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Accept'],
  credentials: true
}));

app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Response logging middleware
app.use((req, res, next) => {
  const originalJson = res.json;
  res.json = function(data) {
    console.log(`[${new Date().toISOString()}] Response:`, data);
    return originalJson.call(this, data);
  };
  next();
});

// Get all destinations
app.get('/api/destinations', async (req, res) => {
  console.log('Fetching destinations from Supabase...');
  try {
    const { data, error } = await supabase
      .from('destinations')
      .select('*');
    
    if (error) {
      console.error('Supabase error:', error);
      return res.status(500)
        .json({ error: 'Failed to fetch destinations', details: error.message });
    }
    
    if (!data) {
      return res.status(404)
        .json({ error: 'No destinations found' });
    }

    console.log(`Successfully fetched ${data.length} destinations`);
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500)
      .json({ error: 'Internal server error', details: error.message });
  }
});

// Get all packages
app.get('/api/packages', async (req, res) => {
  console.log('Fetching packages from Supabase...');
  try {
    const { data, error } = await supabase
      .from('packages')
      .select('*')
      .order('rating', { ascending: false });
    
    if (error) {
      console.error('Supabase error:', error);
      return res.status(500)
        .json({ error: 'Failed to fetch packages', details: error.message });
    }
    
    if (!data) {
      return res.status(404)
        .json({ error: 'No packages found' });
    }

    console.log(`Successfully fetched ${data.length} packages`);
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500)
      .json({ error: 'Internal server error', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
