# Basic Node and Express - FreeCodeCamp Tutorial

## Overview
This is a FreeCodeCamp boilerplate project for learning Node.js and Express. It has been configured to run in the Replit environment.

## Project Structure
- `server.js` - Main server entry point (configured for port 5000 and 0.0.0.0)
- `myApp.js` - Express application with routes (students implement challenges here)
- `views/` - HTML templates
- `public/` - Static assets (CSS)
- `package.json` - Dependencies and scripts

## Current State
- Server is running on port 5000
- Basic routes configured to serve HTML and static files
- Ready for FreeCodeCamp challenges

## Recent Changes (September 29, 2025)
- Modified `server.js` to bind to 0.0.0.0:5000 for Replit compatibility
- Added basic routes in `myApp.js` to serve the HTML page and static files
- Configured workflow to run `npm start`
- Set up deployment configuration for autoscale

## Technology Stack
- Node.js
- Express.js
- FreeCodeCamp Express Background Package

## Development
The server automatically serves:
- Root path `/` - Serves the HTML page from views/index.html
- `/public/*` - Serves static files from the public directory

Students can add additional routes and middleware in `myApp.js` as part of the FreeCodeCamp curriculum.
