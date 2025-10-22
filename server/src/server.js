'use strict';

require('module-alias/register');

const express = require('express');
const cors = require('cors');

const apiRoutes = require('@src/routes/main');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Not Found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('[Error]', err);
  const status = err.status || 500;
  res.status(status).json({
    status,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
