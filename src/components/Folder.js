import React, { useState } from 'react';
import File from './File';

//useState to manage the open/close state of the folder.
const Folder = ({ folder, filter, sortKey }) => {
  const [isOpen, setIsOpen] = useState(false);

  //Toggles the isOpen state to show/hide the folder contents.
  const toggleFolder = () => setIsOpen(!isOpen);

  //Filters and sorts the files within the folder based on the current filter and sort key passed from FileBrowser
  const filterAndSortFiles = (files) => {
    const filteredFiles = files.filter(file => file.name.toLowerCase().includes(filter.toLowerCase()));
    return filteredFiles.sort((a, b) => {
      if (sortKey === 'name') return a.name.localeCompare(b.name);
      if (sortKey === 'date') return new Date(a.added) - new Date(b.added);
      return 0;
    });
  };

  //Holds the filtered and sorted files within the folder.
  const filteredAndSortedFiles = filterAndSortFiles(folder.files);

  return (
    <div className="mb-2">
      <div className="card">
        <div className="card-body" onClick={toggleFolder}>
          <h5 className="card-title">{folder.name}</h5>
          <p className="card-text">Folder</p>
        </div>
      </div>
      {isOpen && (
        <div className="ml-3">
          {filteredAndSortedFiles.map((file, index) => (
            <File key={index} file={file} />
          ))}
        </div>
      )}
    </div>
  );
};
//Renders the folder name and toggles its contents on click. If the folder is open, it maps over filteredAndSortedFiles to render File components.
export default Folder;
