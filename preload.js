const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('opcua', {
  read: (nodeId) => ipcRenderer.invoke('opcua:read', nodeId),
  write: (nodeId, value) => ipcRenderer.invoke('opcua:write', nodeId, value),
});
