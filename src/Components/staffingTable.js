import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    
      backgroundColor: '#1E1E1E',
      color: theme.palette.common.white,
      borderBottom: '1px #121212 solid'

  }));
  

function createData(cohort, offPortfolio, offering, level, craft,period1, period2, period3, total) {
  return { cohort, offPortfolio, offering, level, craft,period1, period2, period3, total };
}

const rows = [
  createData('USI', 'Customer & Marketing', 'Adv..Mark..& Commerce', 'offshore- Managing Director', 'N/A','10%','10%','10%','10'),
  createData('USI', 'Customer & Marketing', 'Adv..Mark..& Commerce', 'offshore- Managing Director', 'N/A','10%','10%','10%','10'),
  createData('USI', 'Customer & Marketing', 'Adv..Mark..& Commerce', 'offshore- Managing Director', 'N/A','10%','10%','10%','10'),
  createData('USI', 'Customer & Marketing', 'Adv..Mark..& Commerce', 'offshore- Managing Director', 'N/A','10%','10%','10%','10'),
  createData('USI', 'Customer & Marketing', 'Adv..Mark..& Commerce', 'offshore- Managing Director', 'N/A','10%','10%','10%','10')
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>COHORT</StyledTableCell>
            <StyledTableCell align="right">OFFERING PORTFOLIO</StyledTableCell>
            <StyledTableCell align="right">OFFERING</StyledTableCell>
            <StyledTableCell align="right">LEVEL</StyledTableCell>
            <StyledTableCell align="right">CRAFT</StyledTableCell>
            <StyledTableCell align="right">Period 1</StyledTableCell>
            <StyledTableCell align="right">Period 2</StyledTableCell>
            <StyledTableCell align="right">Period 3</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.cohort}
              </StyledTableCell>
              
              <StyledTableCell align="right">{row.offPortfolio}</StyledTableCell>
              <StyledTableCell align="right">{row.offering}</StyledTableCell>
              <StyledTableCell align="right">{row.craft}</StyledTableCell>
              <StyledTableCell align="right">{row.level}</StyledTableCell>
              <StyledTableCell align="right">{row.period1}</StyledTableCell>
              <StyledTableCell align="right">{row.period2}</StyledTableCell>
              <StyledTableCell align="right">{row.period3}</StyledTableCell>
              <StyledTableCell align="right">{row.craft}</StyledTableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}