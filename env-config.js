const dotenv = require('dotenv');
dotenv.config();

export const env = {
  HELIUS_API_KEY: process.env.HELIUS_API_KEY || 'undefined',
  // add other environment variables you need here
};
