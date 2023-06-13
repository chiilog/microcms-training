import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'dth6n48d3r',
  apiKey: process.env.API_KEY,
});
