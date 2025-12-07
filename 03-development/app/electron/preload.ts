import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the electron APIs without exposing the entire object
contextBridge.exposeInMainWorld('electron', {
  platform: process.platform,
  openDirectoryDialog: () => ipcRenderer.invoke('dialog:openDirectory'),
});
