#!/usr/bin/env node
import { createApp } from '../src/createApp.js'; // tu lógica

createApp()
  .then(() => console.log('✅ This.GUI project ready!'))
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });