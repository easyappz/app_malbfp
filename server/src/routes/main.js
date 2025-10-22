'use strict';

const express = require('express');

const router = express.Router();

// GET /api/hello
router.get('/hello', (req, res) => {
  try {
    res.status(200).json({ message: 'Hello from API!' });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// GET /api/status
router.get('/status', (req, res) => {
  try {
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

module.exports = router;
