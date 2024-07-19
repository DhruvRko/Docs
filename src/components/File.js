import React from 'react';

//accepts file prop containing file information.
const File = ({ file }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{file.name}</h5>
        <p className="card-text">Type: {file.type}</p>
        <p className="card-text">Added: {file.added}</p>
      </div>
    </div>
  );
};
//Displays file details such as name, type, and added date inside a card.
export default File;
