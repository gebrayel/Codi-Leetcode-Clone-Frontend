import React, { Component,Fragment,useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CancelIcon from '@material-ui/icons/Cancel';
import Grid from '@material-ui/core/Grid';

const ProblemList = ({rows,title}) => {
    
    
  const columns = [
  { id: 'Numero', label: 'Nro', minWidth: 100 },
  { id: 'Title', label: 'Título', minWidth: 50 },
  {
    id: 'Difficulty',
    label: 'Dificultad',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Solved',
    label: 'Solucionado',
    minWidth: 100,
    align: 'right',
    format: (value) => Boolean(value),
  },
];



const useStyles = makeStyles({
  root: {
    // width: '100%',
    backgroundColor:'#7E84A7',
    fontWeight:"bold"
    
    
  },
  container: {
    maxHeight: 600
    // backgroundColor:"#7E84A7"
  },

  
});
  const [col,handleCol]=useState('')
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  

  return (
    <div>
      {/* ESTE H1 CON EL TITULO DEBERIA SER UNO ESTABLECIDO COMO VARIABLE GLOBAL SCSS */}
      <h1 style={{textAlign:'left', color:"black",fontSize:"3rem"}}>{title}</h1>
      <Grid item xs={11} sm={10} md={10} lg={10}>

      <Paper className={classes.root}>
        <TableContainer  className={classes.container}>
          <Table   stickyHeader aria-label="sticky table">
            <TableHead >
              <TableRow >
                {columns.map((column) => (
                  
                  <TableCell
                  key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, backgroundColor:"#7E84A7",color:"white","fontSize":"18px","font-weight":"bold"}}
                    >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody >
              
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                
                
                
                return (
                  
                  <TableRow  hover role="checkbox" tabIndex={-1} key={row.code} >
                    
                    {columns.map((column) => {
                      const value = row[column.id];

                      if(column.id==='Solved'){
                        if(value==='1'){
                          
                          return(
                            
                            <TableCell  style={{"backgroundColor":row.color,"color":'#40F331', "fontSize":"18px","font-weight":"bold"}} key={column.id} align={column.align}>
                                
                                <CheckBoxIcon />   
                              </TableCell>
                        
                        )
                      }else{
                        return(
                          <TableCell style={{"backgroundColor":row.color,"color":'#FF0D0D',"fontSize":"18px","font-weight":"bold"}} key={column.id} align={column.align}>
                                {column.Solved}
                                <CancelIcon/>
                              </TableCell>
                          )
                        }
                        
                      }else{

                        if(column.id==='Title'){
                           return(

                             <TableCell style={{"backgroundColor":row.color, "color":"white","fontSize":"18px","font-weight":"bold"}} key={column.id} align={column.align}>
                              
                              {/* SE DEBE PASAR EL ENDPOINT PARA IR A LA VISTA DEL PROBLEMA ESPECIFICO */}
                          <a href="#" style={{color:'white'}}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </a>    
                              
                            </TableCell>
                          
                          )
                        }else{

                          return(
                            
                            
                            <TableCell style={{"backgroundColor":row.color, "color":"white","fontSize":"18px","font-weight":"bold"}} key={column.id} align={column.align}>
                              
                              
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                              
                            </TableCell>
                          
                          
                          
                          )
                        }
                      }
                      
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          style={{color:"white","fontSize":"18px","font-weight":"bold"}}
        />
      </Paper>
      </Grid>
    </div>
  );
}

 
export default ProblemList;





