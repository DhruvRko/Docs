import React from 'react';
import FileBrowser from './components/FileBrowser';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

//Defines the App component which contains a container with a heading and the FileBrowser component.
function App() {
  return (
    <div className="container mt-5">
      <h1>Document Management</h1>
      <FileBrowser />
    </div>
  );
}

export default App;
