# MMITestDB
MMI test repository

## AgenticCopilot Test Application

This repository contains a simple Node.js web application designed for testing AgenticCopilot features.

### Features

- RESTful API endpoints for CRUD operations
- Simple web interface for managing test data
- In-memory data storage
- Health check endpoint

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The application will start on port 3000 (or the PORT environment variable if set).
Visit http://localhost:3000 to access the web interface.

### API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/data` - Get all data items
- `POST /api/data` - Add a new data item (requires JSON body with `item` field)
- `DELETE /api/data/:id` - Delete a data item by ID

### Running Tests

```bash
npm test
```

### Project Structure

```
.
├── index.js           # Main application file
├── package.json       # Node.js dependencies and scripts
├── test.js            # Simple test suite
├── public/
│   └── index.html    # Web interface
└── README.md         # This file
```
