/**
 * Server configuration for Bilfinans project
 * 
 * This file defines the server ports for the Next.js web application
 * and Sanity Studio to ensure consistent configuration across the project.
 */

module.exports = {
  // Port configuration
  ports: {
    // Next.js web application port
    web: 5278,
    
    // Sanity Studio port
    studio: 3333
  },
  
  // URLs for local development
  urls: {
    // Local Next.js web application URL 
    web: 'http://localhost:5278',
    
    // Local Sanity Studio URL
    studio: 'http://localhost:3333'
  }
};
