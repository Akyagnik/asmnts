// src/components/PeopleTable.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150, editable: true },
  { field: 'email', headerName: 'Email', width: 150, editable: true },
];

const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

const PeopleTable = () => (
  <div style={{ height: 400, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick />
  </div>
);

export default PeopleTable;

