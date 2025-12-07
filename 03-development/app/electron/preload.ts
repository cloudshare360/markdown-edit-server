import { contextBridge } from 'electron';

// Expose protected methods that allow the renderer process to use
// the electron APIs without exposing the entire object
contextBridge.exposeInMainWorld('electron', {
  // Add APIs here as needed
  platform: process.platform,
});
