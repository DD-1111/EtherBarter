import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, from, to, status) {
  return { id, date, from, to, status};
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    'Completed',
  ),
  createData(
    1,
    '16 Mar, 2019',
    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    'Pending',
  ),
  createData(2, '16 Mar, 2019', '0x90F79bf6EB2c4f870365E785982E1f101E93b906', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 'Completed'),
  createData(
    3,
    '16 Mar, 2019',
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
    'In process',
  ),
  createData(
    4,
    '16 Mar, 2019',
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
    'Completed',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Transactions() {
  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.from}</TableCell>
              <TableCell>{row.to}</TableCell>
              <TableCell>{`${row.status}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more transaction
      </Link>
    </React.Fragment>
  );
}