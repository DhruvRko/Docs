import React, { useState } from 'react';
import File from './File';
import Folder from './Folder';

const initialData = [
  { type: 'pdf', name: 'Employee Handbook', added: '2017-01-06' },
  { type: 'pdf', name: 'Public Holiday policy', added: '2016-12-06' },
  {
    type: 'folder', name: 'Expenses', files: [
      { type: 'doc', name: 'Expenses claim form', added: '2017-05-02' },
      { type: 'doc', name: 'Fuel allowances', added: '2017-05-03' }
    ]
  },
  { type: 'csv', name: 'Cost centres', added: '2016-08-12' },
  {
    type: 'folder', name: 'Misc', files: [
      { type: 'doc', name: 'Christmas party', added: '2017-12-01' },
      { type: 'mov', name: 'Welcome to the company!', added: '2015-04-24' }
    ]
  }
];

const FileBrowser = () => {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState('');

  //Updates the filter state 
  const handleFilterChange = (e) => setFilter(e.target.value);

  //Updates the sortKey state 
  const handleSortChange = (e) => setSortKey(e.target.value);

  //Filters and sorts the files based on the current filter and sort key.
  const filterAndSortFiles = (files) => {
    const filteredFiles = files.filter(file => file.name.toLowerCase().includes(filter.toLowerCase()));
    return filteredFiles.sort((a, b) => {
      if (sortKey === 'name') return a.name.localeCompare(b.name);
      if (sortKey === 'date') return new Date(a.added) - new Date(b.added);
      return 0;
    });
  };

  //Holds the filtered and sorted data.
  const filteredAndSortedData = filterAndSortFiles(data);

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Filter by filename"
          value={filter}
          onChange={handleFilterChange}
        />
        <select className="form-control w-25" value={sortKey} onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="date">Date</option>
        </select>
      </div>
      <div>
        {filteredAndSortedData.map((item, index) =>
          item.type === 'folder' ? (
            <Folder key={index} folder={item} filter={filter} sortKey={sortKey} />
          ) : (
            <File key={index} file={item} />
          )
        )}
      </div>
    </div>
  );
};
//Maps over filteredAndSortedData to render File or Folder components accordingly.

export default FileBrowser;
