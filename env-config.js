const dotenv = require('dotenv');
dotenv.config();

export const env = {
  HELIUS_RPC: process.env.HELIUS_RPC_URL || 'undefined',
  // add other environment variables you need here
};
